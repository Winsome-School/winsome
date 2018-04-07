import React from 'react';
import { func } from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../actions';

export const Arrow = ({ onClickRightArrow, onClickLeftArrow }) => (
	<div>
		<div
			className="arrowRight"
			onClick={onClickRightArrow}
			onKeyPress={e => {
				if (e.nativeEvent.keyCode === 13) {
					onClickRightArrow();
				}
			}}
			role="button"
			tabIndex="0"
		/>
		<div
			className="arrowLeft"
			onClick={onClickLeftArrow}
			onKeyPress={e => {
				if (e.nativeEvent.keyCode === 13) {
					onClickLeftArrow();
				}
			}}
			role="button"
			tabIndex="0"
		/>
	</div>
);

Arrow.propTypes = {
	onClickRightArrow: func,
	onClickLeftArrow: func
};
Arrow.defaultProps = {
	onClickRightArrow: null,
	onClickLeftArrow: null
};
export default connect(null, {
	onClickLeftArrow: actions.onClickLeftArrow,
	onClickRightArrow: actions.onClickRightArrow
})(Arrow);
