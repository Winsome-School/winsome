import React from 'react';
import { Link } from 'react-router-dom';
import { string, shape, arrayOf, func } from 'prop-types';

const ResponsiveDropDownMenu = props => {
	// console.log(props);##########
	const { data2, myFunc } = props;
	// console.log(styles)
	const mydata = data2.map(item => {
		return (
			<Link
				className="responsive-anchor-header"
				to={item.addressValue}
				key={item.id}
			>
				{item.value}
			</Link>
		);
	});
	return (
		<div
			className="responsive-drop-down-menu"
			onClick={myFunc}
			onKeyPress={myFunc}
			role="link"
			tabIndex="0"
		>
			{mydata}
		</div>
	);
};

ResponsiveDropDownMenu.propTypes = {
	data2: arrayOf(
		shape({
			id: string.isRequired,
			value: string.isRequired,
			addressValue: string.isRequired,
			styles: string.isRequired
		})
	).isRequired,
	myFunc: func.isRequired
};

export default ResponsiveDropDownMenu;
