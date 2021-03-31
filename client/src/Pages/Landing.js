import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import Jumbotron from '../Components/Jumbotron/Jumbotron';
import Login from '../Components/Login/Login';
import Signup from '../Components/Signup/Signup';
import Footer from '../Components/Footer/Footer';

function Landing() {
	return (
		<div>
			<Router>
				<Navbar />
				<Switch>
					<Route exact path="/">
						<Jumbotron />
					</Route>
					<Route exact path="/Login">
						<Login />
					</Route>
					<Route exact path="/Signup">
						<Signup />
					</Route>
				</Switch>
				<Footer />
			</Router>
		</div>
	);
}

export default Landing;
