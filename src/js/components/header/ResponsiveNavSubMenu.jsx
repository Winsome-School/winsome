import React from 'react';
import ResponsiveDropDownMenu from './ResponsiveDropDownMenu';
const ResponsiveNavSubMenu = props => {
	//console.log(props);
	return (
		<div>
			<div className="responsive-nav-sub-menu-bar">{props.data}</div>
			<ResponsiveDropDownMenu {...props} />
		</div>
	);
};
export default ResponsiveNavSubMenu;
