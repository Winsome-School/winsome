import React from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import {onClickRightArrow,onClickLeftArrow} from '../../actions'

export class Arrow extends React.Component{
	constructor()
	{
		super();
	}
	render(){
		let {onClickRightArrow,onClickLeftArrow}=this.props;
		return (
			<div>
				<div className="arrowRight"
				onClick={onClickRightArrow}
				>
				
				</div>
				<div className="arrowLeft"
				onClick={onClickLeftArrow}
				>
				</div>
			</div>
		)
	}
}
Arrow.propTypes={
	onClickRightArrow:PropTypes.func,
	onClickLeftArrow:PropTypes.func
}
export default connect(null,{onClickLeftArrow,onClickRightArrow})(Arrow);