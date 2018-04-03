import React from 'react';
<<<<<<< HEAD
import { shape, arrayOf, string } from 'prop-types';
=======
import { shape, arrayOf, string, number } from 'prop-types';
>>>>>>> 0e2bb0bf8a7c4da622c6eee85d4f822541b0cb07
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
<<<<<<< HEAD
						key={Math.random()}
=======
						key={item.id}
>>>>>>> 0e2bb0bf8a7c4da622c6eee85d4f822541b0cb07
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
<<<<<<< HEAD
=======
					id: number,
>>>>>>> 0e2bb0bf8a7c4da622c6eee85d4f822541b0cb07
					textHeading: string.isRequired,
					text: string.isRequired,
					image: string.isRequired
				})
			).isRequired
		}).isRequired
	}).isRequired
};
