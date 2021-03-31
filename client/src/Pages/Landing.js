import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from '../Components/Navigation/Navigation';
import Header from '../Components/Header/Header';
import Login from '../Components/Login/Login';
import Signup from '../Components/Signup/Signup';
import Footer from '../Components/Footer/Footer';

function Landing() {
	return (
		<div>
			<Router>
				<Navigation />
				<Switch>
					<Route path="/">
						<Header />
					</Route>
					<Route path="/login">
						<Login />
					</Route>
					<Route path="/signup">
						<Signup />
					</Route>
				</Switch>
				<Footer />
			</Router>
		</div>
	);
}

export default Landing;
