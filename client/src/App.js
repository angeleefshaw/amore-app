import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Main from './Pages/Main';
import Landing from './Pages/Landing';
import Container from 'react-bootstrap/Container';
import Quiz from './Pages/Quiz';

function App() {
	return (
		<Router>
			<Route exact path="/">
				<Landing />
			</Route>
			<Route exact path="/main">
				<Main />
			</Route>
			<Route exact path="/quiz">
				<Container>
					<Quiz />
				</Container>
			</Route>
		</Router>
	);
}

export default App;
