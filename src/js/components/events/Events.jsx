import React from 'react';
import dataForEvents from './DataEvents';
import EventsSection from './EventsSection';
import Discover from '../discover/Discover';
import News from '../News/News';
import Hero from '../hero/HeroImage';

const Events = () => {
  // console.log(dataForEvents)
  const dataToRender = dataForEvents.map(item => (
    <EventsSection
      key={item.id}
      thmubnail={item.thmubnail}
      style={item.style}
      description={item.description}
      amountOfPhotos={item.amountOfPhotos}
      year={item.year}
    />
  ));
  return (
    <div>
      <Hero style={'events-img'} />
      <div className="events-wrapper">
        <div className="my-events">
          <h2 className="events-h2">Junior School</h2>
          <div className="box-events" />
          <p>
            Kindergarten and Pre-primary education provides an important
            foundation for both brain development and instilling a child life
            long love of learning. We have a holistic view of education and
            cater for the physical, creative, intellectual, emotional, social
            and spiritual domains of learning in our classrooms.
          </p>
          {dataToRender}
        </div>
        <div className="events-news">
          <News />
        </div>
      </div>
      <div className="clear">
        <Discover />
      </div>
    </div>
  );
};

export default Events;
