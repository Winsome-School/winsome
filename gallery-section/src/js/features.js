import React from 'react';
export default class Features extends React.Component{

	render(){
		return(
				<div className="features">
		<div className="col-md-12">
			<div className="col-md-4">
				<h2>Who We Are</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat.</p>
				<a href="#" className="learn-more">Learn More</a>
			</div>
			<div className="col-md-4">
				<h2>Years Group</h2>
				<ul>
					<li><a href="#">Childcare >></a></li>
					<li><a href="#">Kindy Early learning >></a></li>
					<li><a href="#">Primary >></a></li>
					<li><a href="#">Secondary >></a></li>
				</ul>
				<a href="#" className="learn-more">Learn More</a>
			</div>
			<div className="col-md-4">
				<h2>Harmony day</h2>
				<iframe width="320" height="180" src="https://www.youtube.com/embed/watch?v=C0DPdy98e4c">
</iframe> 
			</div>
		</div>
	</div>	
		)
	};
}