import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function Login() {
	return (
		<div className="login-card">
			<h1>User Sign In</h1>
			<form className="pure-form pure-form-aligned">
				<fieldset>
					<div className="pure-control-group">
						<label for="aligned-name">Username</label>
						<input type="text" id="aligned-name" placeholder="Username" />
					</div>
					<div className="pure-control-group">
						<label for="aligned-password">Password</label>
						<input type="password" id="aligned-password" placeholder="Password" />
					</div>

					<Link to="/" className="pure-button pure-button-primary">
						Sign In
					</Link>
				</fieldset>
			</form>
		</div>
	);
}

export default Login;
