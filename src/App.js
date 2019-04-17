import React, {Component} from 'react';
import axios from 'axios';
import {formatDate} from './helpers/formatDate';
import {reduceTelecasts} from './helpers/reduceTelecasts';

import {Wrapper, Container } from './styled';

import Head from './components/Head';
import TelecastList from "./components/TelecastList";

const chid = '148';
const domain = 'perm';
const urlAPI = 'http://epg.domru.ru';

class App extends Component {

	state = {
		title: '',
		logo: '',
		url: '',
		info: []
	};

	componentDidMount() {
		this.getInfoProgramm();
		this.getTelecasts();
	};

	getInfoProgramm = () => {

		const localInfo = JSON.parse(window.localStorage.getItem('info'));

		if(localInfo && localInfo.title && localInfo.logo && localInfo.url) {

			this.setState({
				title: localInfo.title,
				logo: localInfo.logo,
				url: localInfo.url
			});

			return;
		}

		axios
			.get(`${urlAPI}/channel/info?chid=${chid}&domain=${domain}`)
			.then(res => {
				this.setState({
					title: res.data.title,
					logo: urlAPI + res.data.logo,
					url: res.data.url
				});
				window.localStorage.setItem('info', JSON.stringify(this.state));
			})
			.catch(error => console.log(error));
	};

	getTelecasts = () => {
		const currentDate = Date.parse(new Date());

		const from = `${formatDate(currentDate - 86400000)}+${encodeURIComponent('18:00:00')}`;
		const to = `${formatDate(currentDate)}+${encodeURIComponent('23:59:59')}`;

		const dateRange = JSON.parse(window.localStorage.getItem('rangeDate'));
		const localInfo = JSON.parse(window.localStorage.getItem('info'));

		if(dateRange && localInfo && dateRange.from <= currentDate && dateRange.to >= currentDate) {

			const newTelecastsList = reduceTelecasts({data: localInfo.info, currentDate})

			this.setState({
				...localInfo,
				info: [...newTelecastsList]
			});

			this.allUpdate(newTelecastsList);

			return;
		}

		axios
			.get(`${urlAPI}/program/list?date_from=${from}&date_to=${to}&xvid[0]=1&chid=${chid}&domain=${domain}`)
			.then(res => {

				const currentDate = Date.parse(new Date());

				this.setState({
					info: reduceTelecasts({data: res.data[1], currentDate: currentDate})
				});

				window.localStorage.setItem('info', JSON.stringify(this.state));
				window.localStorage.setItem('rangeDate', JSON.stringify({
					from: Date.parse(formatDate(currentDate - 86400000) + ' 18:00:0'),
					to: Date.parse(formatDate(currentDate) + ' 23:59:59')
				}));

				this.allUpdate(this.state.info);

			})
			.catch(error => console.log(error));
	};

	allUpdate = (info) => {

		const currentDate = Date.parse(new Date());

		this.updateFromServer(currentDate, Date.parse(formatDate(currentDate) + ' 23:59:59'));

		this.updateTelecasts(info, currentDate);
	};

	updateTelecasts = (info, currentDate) => {

		const nextUpdate = info[2].end - currentDate + 1000;

		console.log('Next update from state: ', nextUpdate / 1000 / 60, ' min');

		const update = setTimeout(() => {
			console.log('updating from state');
			clearTimeout(update);
			this.setState({
				info: reduceTelecasts({data: info, currentDate: Date.parse(new Date())})
			});
			this.updateTelecasts(this.state.info, Date.parse(new Date()));
		}, nextUpdate);
	};

	updateFromServer = (currentDate, to) => {

		const nextUpdate = to - currentDate + 1000;

		console.log('Next update from server: ', nextUpdate / 1000 / 60 / 60, ' hours');

		const update = setTimeout(() => {
			console.log('updating from server');
			clearTimeout(update);
			this.getTelecasts();
		}, nextUpdate);
	};

	render() {

		const {title, logo, url, info} = this.state;

		return (
			<Wrapper>
				<Container>
					<Head
						title={title}
						logo={logo}
						url={url}
					/>
					<TelecastList
						info={info}
					/>
				</Container>
			</Wrapper>
		);
	}
}

export default App;