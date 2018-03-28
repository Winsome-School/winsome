import React from 'react';
export default class Feature extends React.Component {

  render() {
    return (
      <div id="discover">
        <div className="Text">
          <h3 className="discover-heading">Discover More About Winsome</h3>
        </div>
        <div className="one-third events">
          <h3 className="discover-subheading">Events</h3>
        </div>
        <div className="one-third faculty">
          <h3 className="discover-subheading">Faculty & Staff</h3>
        </div>
        <div className="one-third policies">
          <h3 className="discover-subheading">Policies & Procedures</h3>
        </div>
        <div className="clear"></div>
      </div>
    )
  }
};