import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import './login.css';

function Login() {
	const [ loginUsername, setLoginUsername ] = useState('');
	const [ loginPassword, setLoginPassword ] = useState('');

	const login = () => {
		axios
			.post('/api/login', {
				username: loginUsername,
				password: loginPassword
			})
			.then(
				function() {
					window.location.href = '/Main';
				}.catch(function(err) {
					console.log(err);
				})
			);
	};

	return (
		<div className="login-card">
			<h1>User Sign In</h1>
			<form className="pure-form pure-form-aligned">
				<fieldset>
					<div className="pure-control-group">
						<label htmlFor="aligned-name">Username</label>
						<input
							type="text"
							id="aligned-name"
							placeholder="Username"
							onChange={(e) => setLoginUsername(e.target.value)}
						/>
					</div>
					<div className="pure-control-group">
						<label htmlFor="aligned-password">Password</label>
						<input
							type="password"
							id="aligned-password"
							placeholder="Password"
							onChange={(e) => setLoginPassword(e.target.value)}
						/>
					</div>
					<Button variant="outline-dark" href="/main" onClick={login}>
						Sign In
					</Button>
				</fieldset>
			</form>
		</div>
	);
}

export default Login;
