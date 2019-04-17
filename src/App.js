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
		axios
			.get(`${urlAPI}/channel/info?chid=${chid}&domain=${domain}`)
			.then(res => {
				this.setState({
					title: res.data.title,
					logo: urlAPI + res.data.logo,
					url: res.data.url
				})
			})
			.catch(error => console.log(error));
	};

	getTelecasts = () => {
		const currentDate = Date.parse(new Date());

		const from = `${formatDate(currentDate)}+${encodeURIComponent('00:00:00')}`;
		const to = `${formatDate(currentDate)}+${encodeURIComponent('23:59:59')}`;

		axios
			.get(`${urlAPI}/program/list?date_from=${from}&date_to=${to}&xvid[0]=1&chid=${chid}&domain=${domain}`)
			.then(res => {

				this.setState({
					info: reduceTelecasts(res.data[1], currentDate)
				});

				this.updateTelecasts(this.state.info, Date.parse(new Date()));

			})
			.catch(error => console.log(error));
	};

	updateTelecasts = (info, currentDate) => {

		const nextUpdate = info[2].end - currentDate + 1000;

		console.log('Next update: ', nextUpdate);

		const update = setTimeout(() => {
			console.log('updating');
			clearTimeout(update);
			this.setState({
				info: reduceTelecasts(info, Date.parse(new Date()))
			});
			this.updateTelecasts(this.state.info, Date.parse(new Date()));
		}, nextUpdate);
	}

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