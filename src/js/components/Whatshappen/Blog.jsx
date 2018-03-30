import React from 'react';
import _ from 'lodash';
import WhatsHappen from './whatsHappen';
import data from '../../Data';

class Blog extends React.Component {
  constructor() {
    super();

    this.state = {
      selectedView: [data[0], data[1]],
      firstIndexofSelectedView: 0,
    }
    this.next=this.next.bind(this);
    this.previous=this.previous.bind(this);
  }

  next(){
    var {selectedView, firstIndexofSelectedView} = this.state;
    if (firstIndexofSelectedView < data.length - 2) {
      var newview = [...selectedView];

      newview.splice(0,2,data[firstIndexofSelectedView+1],data[firstIndexofSelectedView+2]);
      var newindex = firstIndexofSelectedView +1;
      this.setState({
      selectedView:newview,
      firstIndexofSelectedView:newindex
    })

   }

  }


  previous() {
    var {selectedView, firstIndexofSelectedView} = this.state;
    if(firstIndexofSelectedView > 0 && firstIndexofSelectedView < 5) {
      var newview = [...selectedView];
      newview.splice(0,2,data[firstIndexofSelectedView-1],data[firstIndexofSelectedView])
      var newindex = firstIndexofSelectedView-1;
      
      this.setState({
      selectedView:newview,
      firstIndexofSelectedView:newindex
      })

   }
  }



  render() {
    var {selectedView} = this.state;
    var responsiveView = <WhatsHappen blog={selectedView[0]} />
    selectedView = selectedView.map((item, index) => {
      return <WhatsHappen  blog={item} count={index}/>
    });
  
    console.log('selectedView',selectedView[0])

    if(window.innerWidth >= 992){
      selectedView = selectedView
      console.log('selectedView')
    }
    else{
      selectedView = responsiveView
      console.log('responsiveView')
    }

    return (
    	 
       <div id="sec-2">
            <div className="wraper"> 

                <div className="des">
                    <h2>What's been happening</h2>
                    <span>What it's like to be a part of our school community. </span>
                </div>
              
                {/*{responsiveView}*/}
                

                <div className="slide-show">

                   <div className="arrows left" onClick={this.previous}>
                      <div className="arrow previous"></div>
                   </div>

                   <div className="arrows right" onClick={this.next}>
                     <div className="arrow next"></div>
                   </div> 

                   <div className="whatsHappen-card">

                      <div className="whatsHappen-box">
                        {selectedView}
                      </div>

                   </div>


                  



                </div>

                <div className="clear">
                </div>
         
           </div>
		  </div>
    );
  }
};

export default Blog;