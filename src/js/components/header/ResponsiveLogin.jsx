import React from 'react';
import { Link } from 'react-router-dom';

const ResponsiveLogin = props => {
	let { data } = props;
	//console.log(data);
	return (
		<div className="responsive-login">
			<Link className="responsive-anchor-header" to={data.addressValue}>
				{data.value}
			</Link>
		</div>
	);
};

export default ResponsiveLogin;
