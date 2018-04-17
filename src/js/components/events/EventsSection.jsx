import React from 'react';
import PropTypes from 'prop-types';

const EventsSection = ({style,description,amountOfPhotos,year})=>(
	<div className={style}>
		<div className='events-Img' />
		<h3>{description}</h3>
		<h4>{year}</h4>
		<h5>{amountOfPhotos}</h5>
	</div>
)

EventsSection.propTypes = {
  style:PropTypes.isRequired,
  description:PropTypes.isRequired,
  amountOfPhotos:PropTypes.isRequired,
  year:PropTypes.isRequired
};

export default EventsSection;