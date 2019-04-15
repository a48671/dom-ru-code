import React, {PureComponent} from 'react';
import {Wrapper, Logo, Title} from './styled';

class Head extends PureComponent {
	render() {
		return (
			<Wrapper>
				<Logo>
					<img
						src="https://v.od.ua/uploads/92/logo.png"
					     alt="logo"
					/>
				</Logo>
				<Title>
					Lorem ipsum dolor sit amet
				</Title>
			</Wrapper>
		);
	}
}

Head.propTypes = {};

export default Head;