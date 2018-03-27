import React from 'react';


export default class Contact extends React.Component{
	constructor(){
		super();
		this.state = {value: ''};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange(e){
		this.setState({value: e.target.value})

	}
	handleSubmit(e){
		alert('Form is submitted: ' + this.state.value);
		e.preventDefault();
	}
	render() {
	return(
		<div className="contact">
			<div className='row'>
				<div className="col-md-6 contactInfo">
					<h2 className='contactH2'>Get In Touch</h2>
						<div className='yellowBox'></div>
						<p className='contactP'>We are always happy to answer questions about life at School. Please do not hesitate to get in touch by telephone or email</p>
						<br></br>
						<p className='contactP'><b>Pakistan:</b> 01883 343028</p>
						<p className='contactP'><b>International:</b> +44 1883 343028</p>

				</div>
				
				<div className="col-md-6 location">
					<div className="col-md-1 glyphicon">
					<p><span className ='glyphicon glyphicon-map-marker'></span></p>
					</div>
					<div className="col-md-5 address">
						<p><b>Winsome Radical School</b></p>
						<p>Harestone Valley Road</p>
						<p>Caterham</p>
						<p>Surrey CR3 6YA</p>
					</div>
				</div>
			</div>
			<div className="row">
				<div className='contactUs'>
					<div className='contactForm'>
						<h2 className='contactH2'>Contact Us</h2>
						<div className='yellowBox'></div>
						<form className='userInfo' value = {this.state.value} onChange = {this.handleChange}>
							<input type="text" placeholder="First Name" /><br/>
							<input type="text" placeholder="Last Name" /><br/>
							<input type="text" placeholder="Email"/><br/>
							<input type="text" placeholder="Subject"/><br/>
							<textarea placeholder="Message"></textarea><br/>
							<button value = {this.state.value} onSubmit = {this.handleSubmit}>Submit</button>
						</form>	
					</div>
				</div>
			</div>
		</div>
		)}
}