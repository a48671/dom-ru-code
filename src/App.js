import React, {Component} from 'react';

import {Wrapper, Container } from './styled';

import Head from './components/Head';
import TelecastList from "./components/TelecastList";

class App extends Component {
	render() {
		return (
			<Wrapper>
				<Container>
					<Head />
					<TelecastList />
				</Container>
			</Wrapper>
		);
	}
}

export default App;