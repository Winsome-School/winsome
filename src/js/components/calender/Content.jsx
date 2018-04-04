import React from 'react';
import Arrow from './Arrow';
import Event from './Event';
import { number } from 'prop-types';
const Content = ({ count }) => (
	<div className="heroImage">
		<div className="line" />
		<h2>
			<strong>Up Coming Events</strong>
		</h2>
		<div className="renderEvents">
			<Event count={count} />
		</div>
		<div className="clear" />
		<Arrow />
	</div>
);
Content.propTypes = {
	count: number.isRequired
};
export default Content;
