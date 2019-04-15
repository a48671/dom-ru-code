import React, {Component} from 'react';

import {Wrapper, Container } from './styled';

import Head from './components/Head';

class App extends Component {
	render() {
		return (
			<Wrapper>
				<Container>
					<Head />
				</Container>
			</Wrapper>
		);
	}
}

export default App;