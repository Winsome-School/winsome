import React from 'react';
import Discover from '../discover/Discover';
import { images } from './photogallerydata';
import Hero from '../hero/HeroImage';

const Gallery = () => {
  return (
    <div>
      <Hero
        style={'header-image'}
      />
      <div id='photogallery'>
        <div>
          <h2 className='photogalleryH2'>Photo Gallery Title</h2>
          <div className='yellowBox'></div>
          <p className='photogalleryP'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua.
        	</p>
        </div>
        <div className='showImages'>
          {showImages()}
        </div>
      </div>
      <Discover />
    </div>
  )
}

function showImages() {
  return images.map((item, i) => {
    return (
      <div key={item.key} className='imageContainer'>
        <div className='img' style={{ backgroundImage: 'url(' + item.path + ')' }}>
        </div>
        <div className='photoCaption'>
          <p>Photo Caption. {item.caption}</p>
        </div>
      </div>)
  })
}


export default Gallery