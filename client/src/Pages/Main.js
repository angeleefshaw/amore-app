import React from 'react';
import Topic from '../Components/Topic/Topic';
import Logout from '../Components/Logout/Logout';
import Jumbotron from '../Components/Jumbotron/Jumbotron';
import '../styles/main.css';
import { Link } from 'react-router-dom';

function Main() {
	return (
		<div className="main">
			<div className="main-heading-links">
				<Link className="view-score-link" to="/view-scores">
					High Scores
				</Link>
				<Logout />
			</div>

			<Jumbotron />
			<div className="mainpage-quiz-intro-container">
				<p className="mainpage-quiz-intro">Prepare for your interview by selecting a quiz below.</p>
			</div>
			<Topic />
		</div>
	);
}

export default Main;
