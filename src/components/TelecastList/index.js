import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import {Wrapper} from './styled';
import TelecastItem from "./TelecastItem";

class TelecastList extends PureComponent {

	render() {

		return (
			<Wrapper>
				{this.renderItems()}
			</Wrapper>
		);
	}

	renderItems = () => {

		const {info} = this.props;

		return(
			info.map((telecast) => {

				return(
					<TelecastItem
						key={telecast.start + Math.random()}
						title={telecast.title}
						time={telecast.time}
						type={telecast.type} // isNow, isOver, inFuture, isPast
					/>
				);
			})
		);
	};

}

TelecastList.propTypes = {
	info: PropTypes.arrayOf(PropTypes.object),
	currentDate: PropTypes.number
};

TelecastList.defaultProps = {
	info: [],
	currentDate: Date.parse(new Date())
};

export default TelecastList;