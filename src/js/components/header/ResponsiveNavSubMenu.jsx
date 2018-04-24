import React from 'react';
import { Link } from 'react-router-dom';
import { string, func, arrayOf, shape } from 'prop-types';

import ResponsiveDropDownMenu from './ResponsiveDropDownMenu';

const ResponsiveNavSubMenu = props => {
	const { data, onclick } = props;
	// console.log(data); ##############
	return (
		<div>
			<div
				className="responsive-nav-sub-menu-bar"
				onClick={onclick}
				onKeyPress={onclick}
				role="link"
				tabIndex="0"
			>
				<Link
					className="responsive-anchor-header"
					to={data.addressValue}
				>
					{data.value}
				</Link>
			</div>
			<ResponsiveDropDownMenu {...props} />
		</div>
	);
};
ResponsiveNavSubMenu.propTypes = {
	onclick: func.isRequired,
	data: shape({
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
	}).isRequired
};
export default ResponsiveNavSubMenu;
