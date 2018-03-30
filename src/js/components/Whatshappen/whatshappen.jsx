import React,{ Component } from 'react'

export default class  WhatsHappen extends Component {
	constructor () {
		super();

		
	}

	render() {
		
		let {blog,count} = this.props;
		console.log(this.props)
		var adrs = "../images/"+blog.img;
		

		var style = 'whatshappen card-'+count+'';
		
		return(
				
		          <div className={style}> 

					<div className="img">
		            	<img src={adrs}/>
		            </div>
					
					<div className="img-des">
		            	<h3>{blog.title}</h3>
		            	<p>{blog.description}</p>
		            </div>  

		        </div>
		        
		);
	}
}
