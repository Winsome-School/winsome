import React from 'react';
import { Link } from 'react-router-dom';

const ResponsiveDropDownMenu = props => {
	//console.log(props);
	let { data2, func } = props;
	//console.log(styles)
	let mydata = data2.map((item, index) => {
		return (
			<Link
				className="responsive-anchor-header"
				to={item.addressValue}
				key={index}
			>
				{item.value}
			</Link>
		);
	});
	return (
		<div className="responsive-drop-down-menu" onClick={func}>
			{mydata}
		</div>
	);
};

export default ResponsiveDropDownMenu;
