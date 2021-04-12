import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

function Logout(props) {
	const [ redirect, setRedirect ] = useState(false);

	useEffect(
		() => {
			console.log(redirect);
		},
		[ redirect ]
	);

	const logout = (event) => {
		event.preventDefault();
		axios
			.get('/api/logout')
			.then(function() {
				props.setAuthenticated(false);
				setRedirect(true);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	if (redirect) {
		return <Redirect to="/login-page" />;
	}

	return (
		<div>
			<button onClick={logout} className="logout-link">
				Logout
			</button>
		</div>
	);
}

export default Logout;
