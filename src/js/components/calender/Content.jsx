import React from 'react';
import {connect} from 'react-redux'
import Arrow from './Arrow';
import Event from './Event';
 class Content extends React.Component{
	constructor(){
		super();
	}
	render(){
		return(
			<div className="heroImage">
				<div className="line"></div>
				<h2><strong>Up Coming Events</strong></h2>
				<div className="renderEvents">
						<Event {...this.props}/>
				</div>
				<div className="clear"></div>
				<Arrow
				{...this.props}
				 />
			</div>
		)
	}
}
function mapStateToProps({counter}) {
	return {
		counter
	}
}
export default connect(mapStateToProps,null)(Content)
