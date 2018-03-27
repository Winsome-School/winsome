import React from 'react';
import {connect} from 'react-redux';
import {onClickRightArrow,onClickLeftArrow} from '../../actions'

class Arrow extends React.Component{
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

export default connect(null,{onClickLeftArrow,onClickRightArrow})(Arrow);