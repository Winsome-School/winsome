import React from 'react';

import DropDownMenu from './dropdownmenu'


export default class NavSubMenu extends React.Component {
	constructor(){
		super()
		this.state={
           myclass: ''
		}
		this.handler1=this.handler1.bind(this)
		this.handler2=this.handler2.bind(this)

	}

	handler1(){

	 		this.setState({
	 	           myclass: 'visible'
	 		})
	}
	

	handler2(){

			this.setState({
	 	           myclass: ''
	 		})	
	}

	render() {

   		return (
   			<div id='nav-sub-menu'>
				<div className='nav-sub-menu-bar' onMouseOver={this.handler1} onMouseLeave={this.handler2}>	
					{this.props.data}				
				</div>
				<DropDownMenu extraClass={this.state.myclass} {...this.props} func1={this.handler1} func2={this.handler2}/>
				<div className={`drop-down-box ${this.state.myclass}`} >
				</div>

			</div>
		)
 	}
}

