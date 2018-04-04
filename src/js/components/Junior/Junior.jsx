import React from 'react';
import  data  from './data';
import Discover from '../discover/Discover';
import Hero from '../hero/HeroImage';
import News from '../News/News';

 const Junior =  () =>  (
  
      <div>
        <Hero
          style={'header-image'}
        />
        <div className="container">
        
          <div className="junior">
            <h2>{data.p1.heading}</h2>
            <div className='box' />
            <p>
            {data.p1.text}
            </p>
            <div className="image" >
              <img src='./images/junior1.jpg' width='90%' alt="Junior1" />
            </div>
            
          </div>
          <News />
          <div className="creating">
            <h2>{data.p2.heading}</h2>
            <div className="box" />
            <div className="textimage">
              <div className="pdivs">
                <p>
                {data.p2.p21.text}
                </p>
                <p>
                {data.p2.p22.text}
                </p>
                <p>
                {data.p2.p23.text}
                </p>
              </div>
              <div className="image">
                <img className='imglion' src='./images/junior2.jpg' alt='junior2' />
              </div>
              <div className="clear" />
            </div>
          </div>
          <div className="key">
            <h2>{data.p3.heading}</h2>
            <div className="box" />
            <p>
            {data.p3.text}
            </p>
          </div>
        </div>
        <Discover />
      </div>
     
  )
export default Junior