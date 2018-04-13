import React from 'react';
import { Link } from 'react-router-dom';

const DropDownMenu = props => {
	let { data2, func1, func2, styles } = props;
	//console.log(styles)
	let mydata = data2.map((item, index) => {
		return (
			<Link to={item.addressValue} key={index}>
				{item.value}
			</Link>
		);
	});
	return (
		<div
			id="div3"
			className={`drop-down-menu ${styles}`}
			onMouseOver={func1}
			onMouseLeave={func2}
		>
			{mydata}
		</div>
	);
};

export default DropDownMenu;
