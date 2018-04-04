import React from 'react';
import { shape, arrayOf, string, number } from 'prop-types';
import Part from './Part';

class Portion1 extends React.Component {
	renderArrayHandler() {
		const { achieversData } = this.props;

		return (
			<div>
				<h2>{achieversData.class17Data.textYear}</h2>
				<div className="box" />
				{achieversData.class17Data.data.map(item => (
					<Part
						key={item.id}
						text={item.text}
						textHeading={item.textHeading}
						image={item.image}
					/>
				))}
				<div className="clear" />
			</div>
		);
	}
	render() {
		return <div className="portion1">{this.renderArrayHandler()}</div>;
	}
}

export default Portion1;

Portion1.propTypes = {
	achieversData: shape({
		firstPart: shape({
			heading: string.isRequired,
			text: string.isRequired
		}).isRequired,
		class17Data: shape({
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
