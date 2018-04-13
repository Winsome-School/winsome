import React from 'react';
import Discover from '../discover/Discover';
import Hero from '../hero/HeroImage';
import News from '../News/News'

export default class Staff extends React.Component {

render() {

  return (
    <div id="staff">
      <Hero
          style={'header-image'}
        />
      <div className = 'staff-app'>
        <div className='staff'>
         <div className = 'heading'> <h2> Faculty & Staff </h2> 
          <div className='box'></div></div>
          <div className = 'paragraph'>
          <p>Creating inspiring lessons which expose pupils to arange of media and learning styles,they
            aim to help young people of all abilities to develop learning habits which will not only lead
            them to exam success but stand them in good stead for the rest of their lives.</p>

          <p>As well as their own subject specialisms,our staff bring a diverse range of
          talents and contacts to Winsome School which help enrich the life of the school-from
          arranging special trips,or learning challenges to staging exhibitions and school plays.</p>

          <p>Teachers,tutors,house parents and management teams also work collaboratively
          to create a positive and purpose ful atmosphere where young people feel happy and valued,
          can express their individuality and learn to conduct themselves with maturity,
          courtesy and respect, whilst developing aquiet‘condence for life’.</p>

          <p>If you're interested in working with us,please visit our Careers page.</p>
          </div>
        </div>
        <div className="staff-news">
          <News />
        </div>
      </div>
      
      <div className="clear">
        <Discover />
      </div>
    </div>
  );
}

}