import React from 'react';
import { Redirect } from 'react-router-dom';

class ProtectedRoute extends React.Component {
	render() {
		const Component = this.props.component;
		const authenticated = this.props.authenticated;

		return authenticated ? <Component /> : <Redirect to={{ pathname: '/login-page' }} />;
	}
}

export default ProtectedRoute;
