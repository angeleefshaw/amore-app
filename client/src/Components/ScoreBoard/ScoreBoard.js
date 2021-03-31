import React, { useState } from 'react';
import './style.css';

function ScoreBoard() {
	const [ record, setRecord ] = useState({
		quiz: '',
		name: '',
		score: ''
	});

	// when input values change, update the record
	const handleChange = (e) => {
		const { name, value } = e.target;
		setRecord({
			...record,
			[name]: value
		});
	};

	// console log the record for now, will eventually send to db
	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(record);
	};

	return (
		<div>
			<h1 className="scores-header">Top 5</h1>
			{/* Form to Gather user score and send to scores db*/}
			<form className="pure-form">
				<fieldset>
					<input type="quiz" placeholder="quiz" name="quiz" value={record.quiz} onChange={handleChange} />
					<input type="name" placeholder="name" name="name" value={record.name} onChange={handleChange} />
					<input type="score" placeholder="score" name="score" value={record.score} onChange={handleChange} />
					<button type="submit" class="pure-button pure-button-primary" onClick={handleSubmit}>
						Submit Score
					</button>
				</fieldset>
			</form>
			{/* Confitional Render based on state length*/}
			<div className="row">
				<div className="column">
					<h1>React</h1>
					<li>User 1</li>
					<li>User 2</li>
					<li>User 3</li>
					<li>User 4</li>
					<li>User 5</li>
				</div>
				<div className="column">
					<h1>Javascript</h1>
					<li>User 1</li>
					<li>User 2</li>
					<li>User 3</li>
					<li>User 4</li>
					<li>User 5</li>
				</div>
				<div className="column">
					<h1>Comp Sci</h1>
					<li>User 1</li>
					<li>User 2</li>
					<li>User 3</li>
					<li>User 4</li>
					<li>User 5</li>
				</div>
				<div className="column">
					<h1>Node.js</h1>
					<li>User 1</li>
					<li>User 2</li>
					<li>User 3</li>
					<li>User 4</li>
					<li>User 5</li>
				</div>
			</div>
		</div>
	);
}

export default ScoreBoard;
