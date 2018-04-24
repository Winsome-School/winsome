import React from 'react';
import { Link } from 'react-router-dom';
import { shape, string } from 'prop-types';

const ResponsiveLogin = props => {
	const { data } = props;
	// console.log(data);####
	return (
		<div className="responsive-login">
			<Link className="responsive-anchor-header" to={data.addressValue}>
				{data.value}
			</Link>
		</div>
	);
};

ResponsiveLogin.propTypes = {
	data: shape({
		id: string.isRequired,
		value: string.isRequired,
		styles: string.isRequired,
		addressValue: string.isRequired
	}).isRequired
};

export default ResponsiveLogin;
