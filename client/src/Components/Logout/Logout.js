import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

function Logout(props) {
	// const [ redirect, setRedirect ] = useState(false);

	// useEffect(
	// 	() => {
	// 		console.log(redirect);
	// 	},
	// 	[ redirect ]
	// );

	const logout = () => {
		axios
			.get('/api/logout')
			.then(function() {
				props.setAuthenticated(false);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<div>
			<button onClick={logout} className="logout-link">
				Logout
			</button>
		</div>
	);
}

export default Logout;
