import React, { Component } from 'react';
import { func, bool, shape, string } from 'prop-types';
import { connect } from 'react-redux';
import { getUserAction, getPassAction, loginAction } from '../../actions';

import {Redirect} from 'react-router-dom';

class SignIn extends Component {
	constructor() {
		super();

		this.getUserName = this.getUserName.bind(this);
		this.getPassword = this.getPassword.bind(this);
		this.loginHandler = this.loginHandler.bind(this);
	}

	getUserName(e) {
		this.props.getUserAction(e.target.value);
	}
	getPassword(e) {
		this.props.getPassAction(e.target.value);
	}

	loginHandler() {
		this.props.loginAction();
	}

	render() {
		const { loginData } = this.props;
		
		return loginData.usermatch ? (
			<div>
				<Redirect to="/dashboard" />
			</div>
		) : (
			<div>
				
				
				<div className="user-signin">
					<div className="wraper">
						<div className="login-box">
							<h1>
								LOGIN CREDENTIALS
								<span className="glyphicon glyphicon-user" />
							</h1>

							<form className="login-form">
								<div className="yellow-icon" />
								<input
									type="text"
									placeholder="Username"
									onChange={this.getUserName}
									required
								/>

								<div className="yellow-icon" />
								<input
									type="password"
									placeholder="Password"
									onChange={this.getPassword}
									required
								/>

								<input
									type="button"
									value="Submit"
									className="login-btn"
									onClick={this.loginHandler}
								/>

								<br />
								{loginData.loginMsg}
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
SignIn.propTypes = {
	getUserAction: func,
	getPassAction: func,
	loginAction: func,
	loginData: shape({
		usermatch: bool,
		loginMsg: string
	})
};
SignIn.defaultProps = {
	getUserAction: null,
	getPassAction: null,
	loginAction: null,
	loginData: {
		usermatch: false,
		loginMsg: ''
	}
};

function mapStateToProps({ loginData }) {
	return { loginData };
}

export default connect(mapStateToProps, {
	getUserAction,
	getPassAction,
	loginAction
})(SignIn);
