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
    selectedView = selectedView.map((item, i) => {
      return <WhatsHappen key={i} blog={item} next={this.next} previous={this.previous} selectedView={selectedView}/>
    });
  

    return (
    	 <div>
         <div id="sec-2">
              <div className="wraper"> 
                  <div className="des">
                      <h2>What's been happening</h2>
                      <span>What it's like to be a part of our school community. </span>
                  </div>
                  
                  <div className="arrows" onClick={this.previous}>
                      <div className="arrow previous">
                  
                      </div>
                  </div>


  		            {selectedView}

                   <div className="arrows" onClick={this.next}>
                      <div className="arrow next">
                  
                      </div>
                  </div>


              </div>
        </div>
		  </div>
    );
  }
};

export default Blog;