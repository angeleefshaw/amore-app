import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Jumbotron from '../Components/Jumbotron/Jumbotron';
import Header from '../Components/Header/Header'
import '../styles/landing.css';

function Landing() {
	return (
		<div>
			<Navbar />
			<Jumbotron />
			<Header />
			
		</div>
	);
}

export default Landing;
