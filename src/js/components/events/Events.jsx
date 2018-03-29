import React from 'react';
import dataForEvents from './DataEvents';
import EventsSection from './EventsSection';
import Discover from '../discover/Discover';
import EventNews from './EventNews';
import Hero from '../hero/HeroImage';

const Events = function () {
  //console.log(dataForEvents)
  var dataToRender = dataForEvents.map((item, index) => {
    return (
      <EventsSection
        key={index}
        thmubnail={item.thmubnail}
        style={item.style}
        description={item.description}
        amountOfPhotos={item.amountOfPhotos}
        year={item.year}
      />
    )
  })
  return (
    <div>
      <Hero
        style={'header-image'}
      />
      <div className='events-wrapper'>
        <div className='my-events'>
          <h2>Junior School</h2>
          <div className="box-events"></div>
          <p>
            Kindergarten and Pre-primary education provides
            an important foundation for both brain development
            and instilling a child's life long love of learning.
            We have a holistic view of education and cater for the physical,
            creative, intellectual, emotional, social and spiritual domains
            of learning in our classrooms.
		        </p>
          {dataToRender}
        </div>
        <div className='filler'>
          <EventNews />
        </div>
      </div>
      <Discover />
    </div>
  )
}

export default Events