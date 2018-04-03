import React from 'react';

import { shape, string, number } from 'prop-types';

const WhatsHappen = props => {
	const { blog, count } = props;
	const adrs = `../images/${blog.img}`;
	const style = `whatshappen card-${count}`;

	return (
		<div className={style}>
			<div className="img">
				<img src={adrs} alt="" />
			</div>

			<div className="img-des">
				<h3>{blog.title}</h3>
				<p>{blog.description}</p>
			</div>
		</div>
	);
};
WhatsHappen.propTypes = {
	blog: shape({
		img: string,
		title: string,
		description: string
	}),
	count: number
};
WhatsHappen.defaultProps = {
	blog: null,
	count: null
};
export default WhatsHappen;
