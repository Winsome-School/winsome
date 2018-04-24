import React from 'react';
import { Link } from 'react-router-dom';
import { string, shape, arrayOf } from 'prop-types';
import DropDownMenu from './DropDownMenu';

// #######################        ####################
export default class NavSubMenu extends React.Component {
	constructor() {
		super();
		this.state = {
			myclass: ''
		};
		this.handler1 = this.handler1.bind(this);
		this.handler2 = this.handler2.bind(this);
	}

	handler1() {
		this.setState({
			myclass: 'visible'
		});
	}

	handler2() {
		this.setState({
			myclass: ''
		});
	}

	render() {
		// console.log(this.props.dataForNavbarSubmenu);
		const { dataForNavbarSubmenu } = this.props;
		return (
			<div id="nav-sub-menu">
				<div
					className="nav-sub-menu-bar"
					onMouseOver={this.handler1}
					onFocus={this.handler1}
					onMouseLeave={this.handler2}
				>
					<Link
						className="navbar-main-anchors"
						to={dataForNavbarSubmenu.addressValue}
					>
						{dataForNavbarSubmenu.value}
					</Link>
				</div>
				<DropDownMenu
					extraClass={this.state.myclass}
					func1={this.handler1}
					func2={this.handler2}
					{...this.props}
				/>
				<div className={`drop-down-box ${this.state.myclass}`} />
			</div>
		);
	}
}

NavSubMenu.propTypes = {
	dataForNavbarSubmenu: shape({
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

