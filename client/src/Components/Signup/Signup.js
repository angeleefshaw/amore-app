import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function Signup() {
	return (
		<div>
			<h1>New User? Sign up here</h1>
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
					<div className="pure-control-group">
						<label for="aligned-email">First Name</label>
						<input type="First" id="aligned-First" placeholder="First Name" />
					</div>
					<Link to="/" className="pure-button pure-button-primary">
						Let's go!
					</Link>
				</fieldset>
			</form>
		</div>
	);
}

export default Signup;
