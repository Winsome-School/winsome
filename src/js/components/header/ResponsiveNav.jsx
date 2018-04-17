import React from 'react';
//import { Link } from 'react-router-dom';
import ResponsiveNavbar from './ResponsiveNavbar';
class ResponsiveNav extends React.Component {
	constructor() {
		super();
		this.state = {
			invisibleClass: '',
			addingCross: ''
		};
		this.visible = this.visible.bind(this);
	}
	visible() {
		if (!this.state.invisibleClass) {
			this.setState({
				invisibleClass: 'new-responsive-class',
				addingCross: 'added-class-for-making-cross'
			});
		} else {
			this.setState({
				invisibleClass: '',
				addingCross: ''
			});
		}
	}
	render() {
		let { data } = this.props;
		// console.log(this.state.addingCross);
		return (
			<div className="responsive-header">
				<img className="header-logo" src="./images/logo.png" />
				<div
					className={`responsive-nav ${this.state.addingCross}`}
					onClick={this.visible}
				>
					<div className="responsive-nav-lines" />
				</div>
				<ResponsiveNavbar
					data={data}
					newClass={this.state.invisibleClass}
					func={this.visible}
				/>
			</div>
		);
	}
}

export default ResponsiveNav;
