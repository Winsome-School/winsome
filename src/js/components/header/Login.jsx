import React from 'react';
import { string, shape } from 'prop-types';
import { Link } from 'react-router-dom';

const Login = props => {
	const { loginData } = props;
	// ########### UNCOMMENT THE LINE BELOW TO SEE THE COMING PROPS ###########################
	// console.log(loginData);
	return (
		<div id="div1">
			<div className="login ">
				<Link to={loginData.addressValue}>{loginData.value}</Link>
			</div>
			<div className={`loginImage ${loginData.styles}`} />
		</div>
	);
};

Login.propTypes = {
	loginData: shape({
		id: string.isRequired,
		value: string.isRequired,
		styles: string.isRequired,
		addressValue: string.isRequired
	}).isRequired
};

export default Login;

