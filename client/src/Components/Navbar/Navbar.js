import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function Navbar() {
	return (
		<ul>
			<Link to="/Login">
				<li>Login</li>
			</Link>
			<Link to="/Signup">
				<li>Sign Up</li>
			</Link>
		</ul>
	);
}

export default Navbar;
