import React from 'react';

import images from './Gallerydata';

function showImages(){
  return images.map((item)=>(
    <div key={item.key} className='imageContainer'>
      <div className='img' style={{backgroundImage: `url('${item.path}')`}} />
      <div className='photoCaption'>
        <p>Photo Caption. {item.caption}</p>
      </div>
    </div>
  ));
};

const Gallery= ()=>(
  <div id='photogallery'>
    <div>
      <h2 className='photogalleryH2'>Photo Gallery Title</h2>
      <div className='yellowBox' />
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
);

export default Gallery;