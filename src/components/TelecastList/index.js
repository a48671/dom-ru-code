import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import {Wrapper} from './styled';
import TelecastItem from "./TelecastItem";
import {Title} from "./TelecastItem/styled";

class TelecastList extends PureComponent {
	render() {
		return (
			<Wrapper>
				<TelecastItem
					title='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, voluptates.'
					time='00:00'
					type='isOver' // isNow, isOver, inFuture
				/>
				<TelecastItem
					title='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, voluptates.'
					time='01:00'
					type='isNow' // isNow, isOver, inFuture
				/>
				<TelecastItem
					title='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, voluptates.'
					time='02:00'
					type='inFuture' // isNow, isOver, inFuture
				/>
				<TelecastItem
					title='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, voluptates.'
					time='02:00'
					type='inFuture' // isNow, isOver, inFuture
				/>
				<TelecastItem
					title='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, voluptates.'
					time='02:00'
					type='inFuture' // isNow, isOver, inFuture
				/>
			</Wrapper>
		);
	}
}

TelecastList.propTypes = {};

export default TelecastList;