import React from 'react';
import Arrow from './Arrow';
import Event from './Event';
const Content = () => (
	<div className="heroImage">
		<div className="line" />
		<h2>
			<strong>Up Coming Events</strong>
		</h2>
		<div className="renderEvents">
			<Event />
		</div>
		<div className="clear" />
		<Arrow />
	</div>
);

export default Content;
