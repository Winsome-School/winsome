import React from 'react';
export default class Footer extends React.Component{

	render(){
		return(
				<div id="footer">
		<div className="row about">
			<div className="col-md-4">
				<h4>Come Visit Us</h4>
				<p>
					To find out more about South Coast Baptist College and what we can offer your child, please contact us using the details below.
				</p>
				<p className="contactDetails"><b>Phone:</b> (XXX) XXXX XXX</p>
				<p><b>Email:</b> asddsa@adssad.edu.au</p>
				<p><b>Street address:</b> 30 alpha Drive</p>
				<p>Waikiki WA 6169</p>
			</div>
			<div className="col-md-4">
				<h4>Who We Are</h4>
				<p>South Coast Baptist College normalises striving for excellence in life in a healthy, thriving, co-educational Christian community. Families rely on the College to provide the highest standard of private education in a secure, thriving school community.</p>
			</div>
			<div className="col-md-4">
				<h4>Follow us on Instagram</h4>
				<div className="row">
					<img src="./images/sky.jpg" />
					<img src="./images/sky.jpg" />
					<img src="./images/sky.jpg" />
					<img src="./images/sky.jpg" />
				</div>
				<div className="row">
					<img src="./images/sky.jpg" />
					<img src="./images/sky.jpg" />
					<img src="./images/sky.jpg" />
					<img src="./images/sky.jpg" />
				</div>
			</div>
		</div>
		<div className="row"></div>
		<div className="line">
			<div className="col-md-4">
				<span className="fa fa-facebook fa-2x"></span>
				<span className="fa fa-instagram fa-2x"></span>
			</div>
			<div className="col-md-8">
			<p>
				Site by <b>Faizan&amp;Sultan</b> | Copyright © 2017 South East West School. All Rights Reserved
			</p>
			</div>
			<div className="row"></div>
		</div>
	</div>
		)
	};
}