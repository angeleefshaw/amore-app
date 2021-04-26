import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function MainBtn() {
	return (
		<button className="maintbtn">
			<Link to="/main" className="maintbtn">
				Back to main
			</Link>
		</button>
	);
}

export default MainBtn;
