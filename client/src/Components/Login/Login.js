import React from 'react';
import './login.css';

function Login() {
	return (
		<div className = "container">
		<div className="login-card">
			<h3>User Sign In</h3>
			<form className="pure-form pure-form-aligned">
				<fieldset>
					<div className="pure-control-group">
						<label htmlFor="aligned-name">Username: </label>
						<input className= "inputName" type="text" id="aligned-name" placeholder="Username" />
					</div>
					<div className="pure-control-group">
						<label htmlFor="aligned-password">Password: </label>
						<input  className = "inputPass" type="password" id="aligned-password" placeholder="Password" />
					</div>
					<button variant="outline-dark" href="/main">
						Sign In
					</button>
				</fieldset>
			</form>
		</div>
		</div>
	);
}

export default Login;
