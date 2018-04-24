import React from 'react';
import { Link } from 'react-router-dom';
import { string, shape, arrayOf, func } from 'prop-types';

const DropDownMenu = props => {
	const { dataForNavbarDropDownMenu, func1, func2, styles } = props;
	// console.log(styles) ###
	const mydata = dataForNavbarDropDownMenu.map(item => {
		return (
			<Link to={item.addressValue} key={item.id}>
				{item.value}
			</Link>
		);
	});
	return (
		<div
			id="div3"
			className={`drop-down-menu ${styles}`}
			onMouseOver={func1}
			onFocus={func1}
			onMouseLeave={func2}
		>
			{mydata}
		</div>
	);
};

DropDownMenu.propTypes = {
	dataForNavbarDropDownMenu: arrayOf(
		shape({
			id: string.isRequired,
			value: string.isRequired,
			addressValue: string.isRequired,
			styles: string.isRequired
		})
	).isRequired,
	func1: func.isRequired,
	func2: func.isRequired,
	styles: string.isRequired
};
export default DropDownMenu;

