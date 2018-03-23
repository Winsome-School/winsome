import React from 'react';

import {images} from './Gallerydata';

const Gallery= ()=>{
    return (
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
    )
}

function showImages(){
  return images.map((item, i)=>{
    return(
      <div key={item.key} className='imageContainer'>
        <div className='img' style={{backgroundImage: 'url('+ item.path +')'}}>
        </div>
        <div className='photoCaption'>
          <p>Photo Caption. {item.caption}</p>
        </div>
      </div>)
  })
}


export default Gallery

