import React from 'react';
export default class Footer extends React.Component {

  render() {
    return (
      <div id="footer">
        <div className="footer">
          <div className="wrapper">
            <div className="column">
              <img className="footer-logo" src="./images/logo.png" />
              <p className="footer-info">Phone: +92 42 34567890</p>
              <p className="footer-info">Email: info@winsome.ed.pk</p>
              <p className="footer-info">Address: 12-C Madican Block,</p>
              <p className="footer-info">Awan Town, Lahore.</p>
            </div>
            <div className="column-text">
              <h4 className="footer-buttons">OUR SCHOOL</h4>
              <h4 className="footer-buttons">JUNIOR</h4>
              <h4 className="footer-buttons">MIDDLE</h4>
              <h4 className="footer-buttons">SENIOR</h4>
            </div>
            <div className="column-text">
              <h4 className="footer-buttons">ADMISSIONS</h4>
              <h4 className="footer-buttons">STAFF & FACULTY</h4>
              <h4 className="footer-buttons">NEWS/EVENTS</h4>
              <h4 className="footer-buttons">EDUCATION BLOG</h4>
            </div>
            <div className="column-text">
              <h4 className="footer-buttons">POLICIES</h4>
              <h4 className="footer-buttons">CAREERS</h4>
              <h4 className="footer-buttons">RESOURCE CENTER</h4>
            </div>
            <div className="clear"></div>
          </div>
        </div>
        <div className="footer-description">
          <div className="wrapper">
            <div className="social-icons">
              <a href="#" target="_blank"><i className="fa fa-facebook"></i></a>
              <a href="#" target="_blank"><i className="fa fa-instagram"></i></a>
              <a href="#" target="_blank"><i className="fa fa-twitter"></i></a>
              <a href="#" target="_blank"><i className="fa fa-google"></i></a>
            </div>
            <div className="copyright-text">
              <p>
                Copyright © 2018 Winsome School. All Rights Reserved
              </p>
            </div>
            <div className="clear"></div>
          </div>
        </div>
      </div>
    )
  }
};