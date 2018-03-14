import React from 'react';
export default class Footer extends React.Component{

	render() {
		return (
			<div id="footer">
				<div className="row about">
					<div className="col-md-4">
						<h4 className="col-md1">
							<img src="./images/logo.png" />
						</h4>
						<p className="contactDetails"><b>Phone:</b>0340-7101829</p>
						<p><b>Email:</b> ahmad.ramay4@gmail.com</p>
						<p><b>Street address:</b> 780 A block,</p>
						<p>Shar Shah,Lahore.</p>
					</div>
					<div className="colome">
						<h4>OUR SCHOOL</h4>
						<ul>
							<li> JUNIOR</li>
							<li1> MIDDLE </li1>
							<li2> SENIOR </li2>
						</ul>
					</div>
					<div className="SECONDAR">
						<h1>ADMISSIONS</h1>
						<ul>
							<li> STAFF&FACULTY </li>
							<li1> NEW/EVENTS </li1>
							<li2>EDUCATIONBLOG</li2>
						</ul>
					</div>
					<div className="col-md3">
						<h1>POLICIES</h1>
						<ul>
							<li>CAREERS</li>
							<li1>RESOURCECENTER</li1>
						</ul>
					</div>
				</div>
				<div className="line">
			<div className="col-md-4">
				<span className="fa fa-facebook fa-2x"></span>
				<span className="fa fa-instagram fa-2x"></span>
					<span className="fa fa-twitter fa-2x"></span>
					<span className="fa fa-google fa-2x"></span>
			</div>
			<div className="col-md-8">
			<p>
				Site by <b>Ahmad&amp;Xavier</b> | Copyright © 2017 South East West School. All Rights Reserved
			</p>
			</div>
			<div className="row"></div>
				</div>
			</div>
		)
	}
};