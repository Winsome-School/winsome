import React from 'react';
class Images extends React.Component{

	render(){
		return(
			<div className="imagesBox">
				<div className="row">
					<div className="col-md-6">
						<div className="imgb1">
							<div className="hoverLayer1">
							</div>
						</div>
						<div className="imgb3">
							<div className="hoverLayer2">
							</div>
						</div>
					</div>
					<div className="col-md-6">
						<div className="imgb2">
							<div className="hoverLayer2">
							</div>
						</div>
						<div className="imgb4">
							<div className="hoverLayer1">
							</div>
						</div>
					</div>
				</div>
				<div className="container">
					<h2 className="text-center">If you'd like to find out more about 
						what we can offer your child through
					 	our Primary education, please contact us</h2>
				</div>
			</div>	
		)
	}
}

export default Images;