import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import Main from './Pages/Main';
import Landing from './Pages/Landing';
import Quiz from './Pages/Quiz';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import ScoreBoard from './Components/ScoreBoard/ScoreBoard';

function App() {
	const [ authenticated, setAuthenticated ] = useState(false);

	return (
		<Router>
			<Switch>
				<Route exact={true} path="/" component={Landing} />
				<Route
					exact={true}
					path="/login-page"
					render={(props) => (
						<Login {...props} authentication={authenticated} setAuthentication={setAuthenticated} />
					)}
				/>
				<Route exact={true} path="/signup-page" component={Signup} />
				<Route
					exact={true}
					path="/main"
					authenticated={authenticated}
					component={authenticated ? () => <Main setAuthenticated={setAuthenticated} /> : Login}
				/>
				<Route
					exact={true}
					path="/quiz/:id"
					authenticated={authenticated}
					component={authenticated ? Quiz : Login}
				/>
				<Route
					exact={true}
					path="/scoreboard"
					authenticated={authenticated}
					component={authenticated ? () => <ScoreBoard setAuthenticated={setAuthenticated} /> : Login}
				/>
			</Switch>
		</Router>
	);
}

export default App;
