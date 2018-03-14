import React from 'react';
export default class Secondary extends React.Component{

	render(){
		return(
				<div className="secondary-content">
		<div className="wrapper">
			<h1 className="text-center">What's been happening</h1>
			<h4 className="text-center">What it's like to be a part of our school</h4>
			<div className="row">
				<div className="col-md-6">
					<div className="imgf1"></div>
				</div>
				<div className="col-md-6">
					<div className="imgf2"></div>
				</div>
			</div>	
			<div className="row">
				<div className="col-md-6">
					<div className="graybox">
						<ul>
							<li><a href="#">June 27, 2017</a> | </li>
							<li>By <a href="#">SCBC</a> | </li>
							<li>In <a href="#">Sport</a></li>
						</ul>
						<h1>WACSSA Primary Interschool Division 1 Football Champions</h1>
						<p>
							Congratulations to our Year 6 boys (along with 3 of our Year 5’s) who won the WACSSA Division 1 Football Tournament today. There were 3 Divisions and 15 schools competing on the day. The boys had the following results in their division: Round 1 v Dale – Win 6-1 Round 2 v Rehoboth – Win […]
						</p>
						<a href="#" className="learn-more">Learn More</a>
					</div>
				</div>
				<div className="col-md-6">
					<div className="graybox">
						<ul>
							<li><a href="#">June 27, 2017</a> | </li>
							<li>By <a href="#">SCBC</a> | </li>
							<li>In <a href="#">News</a></li>
						</ul>
						<h1>In the Classroom – Year 1A with Mrs Le Roux</h1>
						<p>
							The children in Year 1A are currently exploring Project Based Learning. They have been collaborating with each other to investigate and learn more about different aspects of farming in WA.  The children have had many opportunities to learn skills such as asking questions, finding resources and applying information. 
						</p>
						<a href="#" className="learn-more">Learn More</a>
					</div>
				</div>
			</div>	
		</div>
	</div>
		)
	};
}