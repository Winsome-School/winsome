import React,{ Component } from 'react';
import Menu from './Menu';
import UserData from './UserData';
import Hero from '../hero/HeroImage';

export default class  SignIn extends Component {
		constructor(){
		super();


		this.user = UserData.user;
		this.pass = UserData.pass;

		this.EnterUserName = '';
		this.EnterPassword = '';

		this.state = {

			
			usermatch: false,
			loginMsg: ''
		}

		this.getUserName = this.getUserName.bind(this);
		this.getPassword = this.getPassword.bind(this);
		this.loginHandler = this.loginHandler.bind(this);
	}

	getUserName(e){

		//console.log(e.target.value)
		this.EnterUserName = e.target.value;
		console.log(this.EnterUserName)
	}
	getPassword(e){

		this.EnterPassword = e.target.value;
		console.log(this.EnterPassword)
	}
	
	loginHandler(){

		if( this.EnterUserName != '' && this.EnterPassword != '' ){

				if( this.EnterUserName == this.user && this.EnterPassword == this.pass){

					
					this.setState({
						usermatch:true
					})
				}else{
					this.setState({
						loginMsg:'Please Enter valid Credentials'
					})
				}
		}


	}  

	render() {
		
		let {} = this.props;

		return(
				
		        this.state.usermatch ?  <div> <Hero style={'hero-image'} /><Menu /> </div> :

		        <div>
		        <Hero style={'hero-image'}  />

				<div className="user-signin">
					<div className="wraper">
						<div className="login-box">

							<h1>LOGIN CREDENTIALS 
								<span className="glyphicon glyphicon-user"/>
							</h1>

							
							<form className="login-form">

								<div className="yellow-icon"></div>
								<input type="text" placeholder="Username"  onChange= {this.getUserName} required/> 

								<div className="yellow-icon"></div>
								<input type="password" placeholder="Password" onChange= {this.getPassword} required/> 

								<input type="button" value="Submit" className="login-btn" onClick={this.loginHandler}/>
								
								<br />
								{ this.state.loginMsg }
								
							</form>
							
						</div>

					</div>
				</div>
				</div>

		        
		);
	}
}
