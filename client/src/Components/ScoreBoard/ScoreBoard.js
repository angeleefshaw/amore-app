import React, { useState, useEffect } from 'react';
import Logout from '../Logout/Logout';
import './style.css';
import API from '../../utils/API';

function ScoreBoard() {
	const [ jsResults, setJsResults ] = useState({});
	const [ nodejsResults, setNodejsResults ] = useState({});
	const [ reactResults, setReactResults ] = useState({});

	useEffect(() => {
		Promise.all([
			API.getScores('javascript'),
			API.getScores('nodejs'),
			API.getScores('react')
		]).then((results) => {
			setJsResults(results[0]);
			setNodejsResults(results[1]);
			setReactResults(results[2]);
		});
	}, []);

	console.log('js results: ', jsResults);
	console.log('node results: ', nodejsResults);
	console.log('react results: ', reactResults);

	return (
		<div className="scoreboard-page">
			<Logout />
			<h1 className="scores-header">Top 5</h1>
			{/* Confitional Render based on state length amp through array1-3*/}
			<div className="row">
				<div className="column">
					<h1>React</h1>
					<li className="scores-li">User 1</li>
					<li className="scores-li">User 2</li>
					<li className="scores-li">User 3</li>
					<li className="scores-li">User 4</li>
					<li className="scores-li">User 5</li>
				</div>
				<div className="column">
					<h1>Javascript</h1>
					<li className="scores-li">User 1</li>
					<li className="scores-li">User 2</li>
					<li className="scores-li">User 3</li>
					<li className="scores-li">User 4</li>
					<li className="scores-li">User 5</li>
				</div>
				<div className="column">
					<h1>Node.js</h1>
					<li className="scores-li">User 1</li>
					<li className="scores-li">User 2</li>
					<li className="scores-li">User 3</li>
					<li className="scores-li">User 4</li>
					<li className="scores-li">User 5</li>
				</div>
			</div>
		</div>
	);
}

export default ScoreBoard;
