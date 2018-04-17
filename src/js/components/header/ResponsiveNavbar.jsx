import React from 'react';
import { Link } from 'react-router-dom';

import ResponsiveLogin from './ResponsiveLogin';
import ResponsiveNavSubMenu from './ResponsiveNavSubMenu';
const ResponsiveNavbar = props => {
	//console.log(props.data[1].dataNavbar);
	let { data, newClass, func } = props;
	let responsiveDataArrayLogin = [...data[0].loginData];
	let responsiveDataArrayNavbar = [...data[1].dataNavbar];
	let responsiveLogin = responsiveDataArrayLogin
		.reverse()
		.map((item, index) => {
			return (
				///////// the array is being passed to the component for better results
				<ResponsiveLogin key={index} data={item} />
			);
		});
	let responsiveNavSubMenu = responsiveDataArrayNavbar
		.reverse()
		.map((item, i) => {
			return (
				<ResponsiveNavSubMenu
					key={i}
					data={
						<Link
							className="responsive-anchor-header"
							to={item.addressValue}
						>
							{item.value}
						</Link>
					}
					data2={item.dropDownMenu}
				/>
			);
		});
	//console.log(newClass);
	return (
		<div
			className={`responsive-nav-sub-menu-header ${newClass}`}
			onClick={func}
		>
			<div className="responsive-nav-sub-menu-header-navbar-menus">
				{responsiveNavSubMenu}
			</div>
			<div className="responsive-nav-sub-menu-header-login">
				{responsiveLogin}
			</div>
		</div>
	);
};
export default ResponsiveNavbar;
