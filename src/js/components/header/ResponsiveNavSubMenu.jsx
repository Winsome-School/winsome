import React from 'react';
import ResponsiveDropDownMenu from './ResponsiveDropDownMenu';
const ResponsiveNavSubMenu = props => {
	let { data, onclick } = props;
	//console.log(props);
	return (
		<div>
			<div className="responsive-nav-sub-menu-bar" onClick={onclick}>
				{data}
			</div>
			<ResponsiveDropDownMenu {...props} />
		</div>
	);
};
export default ResponsiveNavSubMenu;
