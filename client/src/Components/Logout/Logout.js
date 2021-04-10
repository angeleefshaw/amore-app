import React from 'react';
import axios from 'axios';

function Logout() {
	const logout = () => {
		axios
			.post('/api/logout')
			.then(function() {
				console.log('logging out...');
			})
			.catch(function(err) {
				console.log(err);
			});
	};

	return (
		<div onClick={logout} className="logout-link">
			Logout
		</div>
	);
}

export default Logout;
