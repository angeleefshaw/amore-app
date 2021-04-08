import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function Navbar() {
	return (
		<ul className="navbar-li">
			<Link to="/login-page">
				<li>Login</li>
			</Link>
			<Link to="/signup-page">
				<li>Sign Up</li>
			</Link>
		</ul>
	);
}

export default Navbar;
