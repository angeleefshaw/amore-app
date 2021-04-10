import React, { useState, useEffect } from 'react';
import Logout from '../Logout/Logout';
import './style.css';
import API from '../../utils/API';

function ScoreBoard(props) {
	const [ jsResults, setJsResults ] = useState([]);
	const [ nodejsResults, setNodejsResults ] = useState([]);
	const [ reactResults, setReactResults ] = useState([]);

	useEffect(() => {
		Promise.all([ API.getScores(1), API.getScores(2), API.getScores(3) ]).then((results) => {
			setJsResults(results[0].data);
			setNodejsResults(results[1].data);
			setReactResults(results[2].data);
		});
	}, []);


	return (
		<div className="scoreboard-page">
			<Logout {...props} />
			<h1 className="scores-header">Top 5</h1>
			{/* Confitional Render based on state length amp through array1-3*/}
			<div className="row">
				<div className="column">
					<h1>React</h1>
					{reactResults.map((result) => (
						<li className="scores-li">
							{result.username} {result.score}
						</li>
					))}
				</div>
				<div className="column">
					<h1>Javascript</h1>
					{jsResults.map((result) => (
						<li className="scores-li">
							{result.username} {result.score}
						</li>
					))}
				</div>
				<div className="column">
					<h1>Node.js</h1>
					{nodejsResults.map((result) => (
						<li className="scores-li">
							{result.username} {result.score}
						</li>
					))}
				</div>
			</div>
		</div>
	);
}

export default ScoreBoard;
