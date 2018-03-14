import React from 'react';
export default class Header extends React.Component{

	render(){
		return(
			// <div>This is React Virtual DOM.</div>
		<header>
		<div className="wrapper">
			<h1>WINSOME LOGO</h1>
			<nav>
				<ul className="upper-links">
					<li><a href="#">Apply</a> | </li>
					<li><a href="#">Give</a> | </li>
					<li><a href="#">Parents Login</a> | </li>
					<li><a href="#">ParentsLinks</a></li>
				</ul>
				<div className="row"></div>
				<ul className="downward-links">
					<li>
						<a href="#">ABOUT</a>
						<div className="text-center abLinks">
					    <a href="#">About School</a>
					    <a href="#">About Facility</a>
					    <a href="#">About Staff</a>
					  </div>
					</li>
					<li>
						<a href="#">ACADEMICS</a>
						<div className="text-center abLinks">
					    <a href="#">Primary</a>
					    <a href="#">Middle</a>
					    <a href="#">A Level</a>
					    <a href="#">O Level</a>
					  </div>
					</li>
					<li>
						<a href="#">ADMISSIONS</a>
						<div className="text-center ad">
					    <a href="#">Admission Date</a>
					    <a href="#">Admission Criteria</a>
					  </div>
					</li>
					<li>
						<a href="#">ALUMNI</a>
						<div className="text-center al">
							<a href="#">Alumni</a>
							<a href="#">Alumni Students</a>
						</div>
					</li>
					<li>
						<a href="#">ATHLETICS</a>
						<div className="text-center at">
							<a href="#">Athletics</a>
						</div>
					</li>
					<li>
						<a href="#">STUDENT LIFE</a>
						<div className="text-center sl">
							<a href="#">Students</a>
						</div>
					</li>
				</ul>
			</nav>
		</div>
		<div className="row"></div>
		</header>
		)
	};
}