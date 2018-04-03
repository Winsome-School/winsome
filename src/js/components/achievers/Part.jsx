import React from 'react';
import { string } from 'prop-types';

const Part = ({ text, textHeading, image }) => (
	<div className="part">
		<img src={image} alt="" />
		<div className="paragraph">
			<h4>{textHeading}</h4>
			<p>{text}</p>
			<div className="clear" />
		</div>
		<div className="clear" />
	</div>
);

export default Part;

Part.propTypes = {
	text: string.isRequired,
	textHeading: string.isRequired,
	image: string.isRequired
};
