import React from 'react';
import { shape, arrayOf, string, number } from 'prop-types';
import Part from './Part';

class Portion2 extends React.Component {
	renderArrayHandler() {
		const { achieversData } = this.props;
		return (
			<div>
				<h2>{achieversData.class16Data.textYear}</h2>
				<div className="box" />
				{achieversData.class16Data.data.map(item => (
					<Part
						key={item.id}
						text={item.text}
						textHeading={item.textHeading}
						image={item.image}
					/>
				))}
			</div>
		);
	}
	render() {
		return (
			<div className="portion2">
				{this.renderArrayHandler()}
				<div className="clear" />
			</div>
		);
	}
}

export default Portion2;

Portion2.propTypes = {
	achieversData: shape({
		firstPart: shape({
			heading: string.isRequired,
			text: string.isRequired
		}).isRequired,
		class16Data: shape({
			textYear: string.isRequired,
			data: arrayOf(
				shape({
					id: number,
					textHeading: string.isRequired,
					text: string.isRequired,
					image: string.isRequired
				})
			).isRequired
		}).isRequired
	}).isRequired
};
