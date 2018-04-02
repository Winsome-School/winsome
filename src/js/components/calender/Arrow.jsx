import React from 'react';
import { func } from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../actions';

export const Arrow = ({ onClickRightArrow, onClickLeftArrow }) => (
	<div>
		<div className="arrowRight" onClick={onClickRightArrow} />
		<div className="arrowLeft" onClick={onClickLeftArrow} />
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
