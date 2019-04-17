import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import {Wrapper, Logo, Title} from './styled';

class Head extends PureComponent {
	render() {

		const {title, logo, url} = this.props;

		return (
			<Wrapper>
				<Logo>
					<img
						src={logo}
					     alt={title}
					/>
				</Logo>
				<Title>
					<a
						href={url}
						target="_blank"
						rel="noopener noreferrer"
					>
						{title}
					</a>
				</Title>
			</Wrapper>
		);
	}
}

Head.propTypes = {
	title: PropTypes.string,
	logo: PropTypes.string,
	url: PropTypes.string
};

Head.defaultProps = {
	title: '',
	logo: '',
	url: ''
};

export default Head;