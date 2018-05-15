import React from 'react';
import { string } from 'prop-types';

const FirstHeading = ({ heading, text }) => (
	<div className="first">
		<div className="firstPart">
			<div className="h2">{heading}</div>
			<div className="box" />
			<p>{text}</p>
			<div className="clear" />
		</div>
		<div className="clear" />
	</div>
);

export default FirstHeading;

FirstHeading.propTypes = {
	heading: string.isRequired,
	text: string.isRequired
};
