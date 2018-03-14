import React, { Component } from 'react';



export default class HeroImage extends Component {
  render() {
    return (
      <section className="bgimage">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            
              <h4 className='speech-bubble'>"Its not just about amazing education you get at Winsome, its about,  
                  <span className='p1' >Who you are when you leave" </span>
                  <p className='p2' > LEARN MORE ABOUT OUR SCHOOL </p>
                  <div className="speech-bubble:after"></div>
                  </h4>
                  
              
            </div>
          </div>
        </div>
      </section>
    );
  }
}