import React, {Component} from 'react';

export default class News extends Component{
	constructor(){
		super();
	}


	render(){
		return (

				<div className="News">
					
					<div className="news-Box">

						<div className="uper-box">

							<h2>Latest News</h2>
							<p> Sed posuere consectetur est at lobor,
								Etiam porta sem malesuada magna..<br/>
								<span>03.28.18</span>
							</p>

							
							<p> Sed posuere consectetur est at lobor,
								Etiam porta sem malesuada magna..<br/>
								<span>03.27.18</span>
							</p>

						</div>


						<div className="lower-box">

							<div className="des-box">
								<h3>Education Blogs</h3>
							</div>
							<div className="des-box box-2">
								<h3>Resource center</h3>
							</div>
							<div className="des-box box-3">
								<h3>Winsome Gallery</h3>
							</div>
							<div className="des-box box-4">
								<h3>Annual Achievers</h3>
							</div>

						</div>


					</div>

					<div className="clear">
					</div>


				</div>

			);
	}
}