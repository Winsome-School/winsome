import React from 'react';
import { bgimage, image1, image2, image3, image4, image5, image6 } from './image.js'

class App extends React.Component{

	render(){
		return(
			<div>
				<div className="imagesDiv" 
				style = {{backgroundImage: 'url('+ bgimage +')'}}>
					<h1 className="text-center">Life At Winsome</h1>
					<div className="box">
						<div className="row firstRow">
							<div className="col-md-6">
								<a href="#modal1"><div className="imgHover img1" style = {{backgroundImage: 'url('+ image1 +')'}}></div></a>
								
							</div>
							<div className="col-md-3 firstImage">
								<a href="#modal2"><div className="imgHover img2" style = {{backgroundImage: 'url('+ image2 +')'}}></div></a>
							</div>
							<div className="col-md-3 secondImage">
								<a href="#modal3"><div className="imgHover img3" style = {{backgroundImage: 'url('+ image3 +')'}}></div></a>
							</div>
						</div>
						<div className="row secondRow">
							<div className="col-md-3 thirdImage">
								<a href="#modal4"><div className="imgHover img4" style = {{backgroundImage: 'url('+ image4 +')'}}></div></a>
							</div>
							<div className="col-md-3 forthImage">
								<a href="#modal5"><div className="imgHover img5" style = {{backgroundImage: 'url('+ image5 +')'}}></div></a>
							</div>
							<div className="col-md-6">
								<a href="#modal6"><div className="imgHover img6" style = {{backgroundImage: 'url('+ image6 +')'}}></div></a>
							</div>				
						</div>
					</div>
				</div>
				<div className="modal" id="modal1">
	      	<a href="#"><div className="modal_bg"></div></a>
	      	<div className="modal_content"> 
	      	<a className="fa fa-times" href="#"></a>
	      		<div className="modelimg1"></div>
	      	</div>
	  		</div>
	  		<div className="modal" id="modal2">
	      	<a href="#"><div className="modal_bg"></div></a>
	      	<div className="modal_content"> 
	      	<a className="fa fa-times" href="#"></a>
	      		<div className="modelimg2"></div>
	      	</div>
	  		</div>
	  		<div className="modal" id="modal3">
	      	<a href="#"><div className="modal_bg"></div></a>
	      	<div className="modal_content"> 
	      	<a className="fa fa-times" href="#"></a>
	      		<div className="modelimg3"></div>
	      	</div>
	  		</div>
	  		<div className="modal" id="modal4">
	      	<a href="#"><div className="modal_bg"></div></a>
	      	<div className="modal_content"> 
	      	<a className="fa fa-times" href="#"></a>
	      		<div className="modelimg4"></div>
	      	</div>
	  		</div>
	  		<div className="modal" id="modal5">
	      	<a href="#"><div className="modal_bg"></div></a>
	      	<div className="modal_content"> 
	      	<a className="fa fa-times" href="#"></a>
	      		<div className="modelimg5"></div>
	      	</div>
	  		</div>
	  		<div className="modal" id="modal6">
	      	<a href="#"><div className="modal_bg"></div></a>
	      	<div className="modal_content"> 
	      	<a className="fa fa-times" href="#"></a>
	      		<div className="modelimg6"></div>
	      	</div>
	  		</div>
			
			</div>
		)
	};
}
export default App;