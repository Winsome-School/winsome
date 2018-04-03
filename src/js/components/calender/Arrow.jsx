import React from 'react';
import { func } from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../actions';

export const Arrow = ({ onClickRightArrow, onClickLeftArrow }) => (
	<div>
		<div
			className="arrowRight"
			onClick={onClickRightArrow}
<<<<<<< HEAD
=======
			onKeyPress={e => {
				if (e.nativeEvent.keyCode === 13) {
					onClickRightArrow();
				}
			}}
>>>>>>> 0e2bb0bf8a7c4da622c6eee85d4f822541b0cb07
			role="button"
			tabIndex="0"
		/>
		<div
			className="arrowLeft"
			onClick={onClickLeftArrow}
<<<<<<< HEAD
=======
			onKeyPress={e => {
				if (e.nativeEvent.keyCode === 13) {
					onClickLeftArrow();
				}
			}}
>>>>>>> 0e2bb0bf8a7c4da622c6eee85d4f822541b0cb07
			role="button"
			tabIndex="0"
		/>
	</div>
);

Arrow.propTypes = {
	onClickRightArrow: func.isRequired,
	onClickLeftArrow: func.isRequired
};
export default connect(null, {
	onClickLeftArrow: actions.onClickLeftArrow,
	onClickRightArrow: actions.onClickRightArrow
})(Arrow);
