import React from 'react';
export default class Images extends React.Component{

	render(){
		return(
				<div className="imagesDiv">
		<h1 className="text-center">Life at Winsome</h1>
		<div className="box">
			<div className="row">
				<div className="col-md-4">
					<div className="imgHover img1"></div>				
				</div>
				<div className="col-md-4">
					<div className="imgHover img2"></div>
					<div className="imgHover img3"></div>
				</div>
				<div className="col-md-4">
					<div className="imgHover img4"></div>
				</div>
			</div>
			<div className="row">
				<div className="col-md-4">
					<div className="imgHover img7"></div>
				</div>
				<div className="col-md-4">
					<div className="imgHover imgsky"></div>
				</div>
				<div className="col-md-4">
					<div className="imgHover imgf1"></div>
				</div>
			</div>
		</div>
	</div>	
		)
	};
}