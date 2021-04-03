import React from 'react';
import Button from 'react-bootstrap/Button';
import './style.css';

function Login() {
	return (
		<div className="login-card">
			<h1>User Sign In</h1>
			<form className="pure-form pure-form-aligned">
				<fieldset>
					<div className="pure-control-group">
						<label htmlFor="aligned-name">Username</label>
						<input type="text" id="aligned-name" placeholder="Username" />
					</div>
					<div className="pure-control-group">
						<label htmlFor="aligned-password">Password</label>
						<input type="password" id="aligned-password" placeholder="Password" />
					</div>
					<Button variant="outline-dark" href="/main">
						Sign In
					</Button>
				</fieldset>
			</form>
		</div>
	);
}

export default Login;
