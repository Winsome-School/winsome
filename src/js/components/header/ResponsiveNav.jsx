import React from 'react';
import { object, arrayOf } from 'prop-types';

// import { Link } from 'react-router-dom'; ###########
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
		const { data } = this.props;
		// console.log(this.state.addingCross);
		// console.log(data);
		return (
			<div className="responsive-header">
				<img
					className="header-logo"
					src="./images/logo.png"
					alt="header logo is not available"
				/>
				<div
					className={`responsive-nav ${this.state.addingCross}`}
					onClick={this.visible}
					onKeyPress={this.visible}
					role="button"
					tabIndex="0"
				>
					<div className="responsive-nav-lines" />
				</div>
				<ResponsiveNavbar
					data={data}
					newClass={this.state.invisibleClass}
					myFunc={this.visible}
				/>
			</div>
		);
	}
}
ResponsiveNav.propTypes = {
	data: arrayOf(object.isRequired).isRequired
};

export default ResponsiveNav;
