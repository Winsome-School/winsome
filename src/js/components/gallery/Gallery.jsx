import React from 'react';
import { bgimage, image1, image2, image3, image4, image5, image6 } from './image'

class Gallery extends React.Component {

  componentDidMount(){

  }
  render() {
    return (
      <div>
        <div 
          id="gallery"
          className="imagesDiv"
          style={{ backgroundImage: `url(${bgimage})` }}
        >
          <h3 className="text-center">Life At Winsome</h3>
          <div className="box">
            <div className="row firstRow">
              <div className="col-md-6">
                <a href="#modal1"><div className=" img1" style={{ backgroundImage: `url(${image1})` }} /></a>

              </div>
              <div className="col-md-3 firstImage">
                <a href="#modal2"><div className=" img2" style={{ backgroundImage: `url(${image2})` }} /></a>
              </div>
              <div className="col-md-3 secondImage">
                <a href="#modal3"><div className=" img3" style={{ backgroundImage: `url(${image3})` }} /></a>
              </div>
            </div>
            <div className="row secondRow">
              <div className="col-md-3 thirdImage">
                <a href="#modal4"><div className=" img4" style={{ backgroundImage: `url(${image4})` }} /></a>
              </div>
              <div className="col-md-3 forthImage">
                <a href="#modal5"><div className=" img5" style={{ backgroundImage: `url(${image5})` }} /></a>
              </div>
              <div className="col-md-6">
                <a href="#modal6"><div className=" img6" style={{ backgroundImage: `url(${image6})` }} /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="modal" id="modal1">
          <a href="#gallery"><div className="modal_bg" /></a>
          <div className="modal_content">
            <a className="fa fa-times" href="#gallery" />
            <div className="modelimg1" style={{ backgroundImage: `url(${image1})` }} />
          </div>
        </div>
        <div className="modal" id="modal2">
          <a href="#gallery"><div className="modal_bg" /></a>
          <div className="modal_content">
            <a className="fa fa-times" href="#gallery" />
            <div className="modelimg2" style={{ backgroundImage: `url(${image2})` }} />
          </div>
        </div>
        <div className="modal" id="modal3">
          <a href="#gallery"><div className="modal_bg" /></a>
          <div className="modal_content">
            <a className="fa fa-times" href="#gallery" />
            <div className="modelimg3" style={{ backgroundImage: `url(${image3})` }} />
          </div>
        </div>
        <div className="modal" id="modal4">
          <a href="#gallery"><div className="modal_bg" /></a>
          <div className="modal_content">
            <a className="fa fa-times" href="#gallery" />
            <div className="modelimg4" style={{ backgroundImage: `url(${image4})` }} />
          </div>
        </div>
        <div className="modal" id="modal5">
          <a href="#gallery"><div className="modal_bg" /></a>
          <div className="modal_content">
            <a className="fa fa-times" href="#gallery" />
            <div className="modelimg5" style={{ backgroundImage: `url(${image5})` }} />
          </div>
        </div>
        <div className="modal" id="modal6">
          <a href="#gallery"><div className="modal_bg" /></a>
          <div className="modal_content">
            <a className="fa fa-times" href="#gallery" />
            <div className="modelimg6" style={{ backgroundImage: `url(${image6})` }} />
          </div>
        </div>

      </div>
    )
  };
}
export default Gallery;