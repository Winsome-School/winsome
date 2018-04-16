import React, { Component } from 'react';

export default class Feature extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="discover-container">
        <div className="header">
          <div className="header-content">
            <h3>Discover More About Winsome</h3>
          </div>
        </div>
        <div className="content">
          <div className="first">
            <div className="footer-discover">
              <h3>Events</h3>
            </div>
          </div>
          <div className="second">
            <div className="footer-discover">
              <h3>Faculty & Staff</h3>
            </div>
          </div>
          <div className="third">
            <div className="footer-discover">
              <h3>Policies & Procedures</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
