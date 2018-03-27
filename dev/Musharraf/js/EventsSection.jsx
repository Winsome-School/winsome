import React from 'react';

export default function EventsSection ({thmubnail,style,description,amountOfPhotos,year}){
	return(
		<div className={style}>
			<div className='events-Img'>
			</div>
			<h3>{description}</h3>
			<h4>{year}</h4>
			<h5>{amountOfPhotos}</h5>
		</div>
	)
}