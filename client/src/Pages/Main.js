import React from "react";
import Topic from "../Components/Topic/Topic";
import Jumbotron from "../Components/Jumbotron/Jumbotron";
import '../styles/main.css';
import {Link} from "react-router-dom";

function Main() {
	return (
		<div className="main">
			<Link className="view-score-link" to="/view-scores">
				High Scores
			</Link>
			<Jumbotron />
			<div className="mainpage-quiz-intro-container">
				<p className="mainpage-quiz-intro">Prepare for your interview by selecting a quiz below.</p>
			</div>
       <Topic/>
    </div>
  )
}

export default Main;
