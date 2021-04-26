import React, { useState, useEffect } from 'react';
import MainBtn from '../MainBtn/MainBtn';
import Logout from '../Logout/Logout';
import './style.css';
import API from '../../utils/API';

function ScoreBoard(props) {
	const [ jsResults, setJsResults ] = useState([]);
	const [ nodejsResults, setNodejsResults ] = useState([]);
	const [ reactResults, setReactResults ] = useState([]);
	const [ awsResults, setAwsResults ] = useState([]);

	useEffect(() => {
		Promise.all([ API.getScores(1), API.getScores(2), API.getScores(3), API.getScores(4) ]).then((results) => {
			setJsResults(results[0].data);
			setNodejsResults(results[1].data);
			setReactResults(results[2].data);
			setAwsResults(results[3].data);
		});
	}, []);

	return (
		<div className="scoreboard-page">
			<MainBtn />
			<Logout {...props} />
			<h1 className="scores-header">Top Scores</h1>
			<div className="row">
				<div className="column">
					<h1 className="scoreboard-header">React</h1>
					{reactResults.map((result) => (
						<li className="scores-li" key={result.id}>
							<div className="score-info">
								{result.username} {result.score}
							</div>
						</li>
					))}
				</div>
				<div className="column">
					<h1 className="scoreboard-header">Javascript</h1>
					{jsResults.map((result) => (
						<li className="scores-li" key={result.id}>
							<div className="score-info">
								{result.username} {result.score}
							</div>
						</li>
					))}
				</div>
				<div className="column">
					<h1 className="scoreboard-header">Node.js</h1>
					{nodejsResults.map((result) => (
						<li className="scores-li" key={result.id}>
							<div className="score-info">
								{result.username} {result.score}
							</div>
						</li>
					))}
				</div>
				<div className="column">
					<h1 className="scoreboard-header">AWS</h1>
					{awsResults.map((result) => (
						<li className="scores-li" key={result.id}>
							<div className="score-info">
								{result.username} {result.score}
							</div>
						</li>
					))}
				</div>
			</div>
		</div>
	);
}

export default ScoreBoard;
