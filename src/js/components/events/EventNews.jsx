import React, {Component} from 'react';

export default class EventNews extends Component{
	constructor(){
		super();
	}


	render(){
		return (

				<div className="event-News">
					
					<div className="event-news-Box">

						<div className="event-uper-box">

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


						<div className="event-lower-box">

							<div className="event-des-box">
								<h3>Education Blog</h3>
							</div>
							<div className="event-des-box event-box-2">
								<h3>Resource center</h3>
							</div>
							<div className="event-des-box event-box-3">
								<h3>Winsome Gallery</h3>
							</div>
							<div className="event-des-box event-box-4">
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