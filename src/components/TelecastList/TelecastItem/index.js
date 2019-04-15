import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import {Wrapper, Time, Title} from './styled'

class TelecastItem extends PureComponent {
	render() {

		const {title, time, type} = this.props;

		return (
			<Wrapper type={type}>
				<Time>
					{time}
				</Time>
				<Title>
					{title}
				</Title>
			</Wrapper>
		);
	}
}

TelecastItem.propTypes = {
	title: PropTypes.string,
	time: PropTypes.string,
	type: PropTypes.string
};

TelecastItem.defaultProps = {
	title: '',
	img: '',
	altImg: '',
	type: 'inFuture'
};

export default TelecastItem;