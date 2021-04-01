import React from 'react';
import Button from 'react-bootstrap/Button';
import './style.css';

function Signup() {
	return (
		<div>
			<h1>New User? Sign up here</h1>
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
					<div className="pure-control-group">
						<label htmlFor="aligned-email">First Name</label>
						<input type="First" id="aligned-First" placeholder="First Name" />
					</div>

					<Button variant="outline-dark">Let's Go</Button>
				</fieldset>
			</form>
		</div>
	);
}

export default Signup;
