import React from 'react';
import Content from './Content';
import events from './Data'

export default class Calender extends React.Component {
	constructor(){
		super();
		
		this.state={
			n:0
		}
		this.onClickRightArrow=this.onClickRightArrow.bind(this);
		this.onClickLeftArrow=this.onClickLeftArrow.bind(this);
	}

	onClickLeftArrow(){
		let {n}=this.state
		if(n<=0){
			return this.setState({
				n:0
			})
		}
		else{
			return this.setState({
				n:n-1
			})
		}	
	}
	onClickRightArrow(){
		let {n}=this.state
		if(this.state.n >= events.length-4){
			return this.setState({
				n:events.length-4
			})
		}
		else{
			return this.setState({
				n:n+1
			})
		}	
	}
	render(){
		const {n}=this.state;
		return (
			<div>
			<Content
			 n={n}
			 onClickLeftArrow={this.onClickLeftArrow}
			 onClickRightArrow={this.onClickRightArrow}
			 />	
			</div>
		)
	}
} 