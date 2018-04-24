import React from 'react';
import { string, shape, arrayOf } from 'prop-types';

import NavSubmenu from './NavSubMenu';

const Navbar = props => {
	const { dataNavbar } = props;
	// console.log(dataNavbar.styles);#
	const dataToRender = dataNavbar.map(item => {
		return (
			<NavSubmenu
				key={item.id}
				dataForNavbarSubmenu={item}
				dataForNavbarDropDownMenu={item.dropDownMenu}
				styles={item.styles}
			/>
		);
	});
	return <div className="my-navbar">{dataToRender}</div>;
};
Navbar.propTypes = {
	dataNavbar: arrayOf(
		shape({
			id: string.isRequired,
			value: string.isRequired,
			addressValue: string.isRequired,
			styles: string.isRequired,
			dropDownMenu: arrayOf(
				shape({
					id: string.isRequired,
					value: string.isRequired,
					addressValue: string.isRequired,
					styles: string.isRequired
				})
			)
		})
	).isRequired
};

export default Navbar;
