// ########## Import Dependencies Here ##########
import React, { Component } from 'react';
// import PropTypes from 'prop-types';

// ########## Import Screens Here ##########

// ########## Import Components Here ##########
import ReadMoreButton from './ReadMoreButton';

export default class JuniorSchool extends Component {

  componentDidMount() {

  }

  render() {
    return (
      <section id="junior-school">
        <div className="top-section">
          <div className="wrapper">
            <h3 className="junior-school-heading">Junior School</h3>
            <p className="junior-school-description">At Winsome we believe in providing a dual approach to education which supports every child to become confident learners. For us, the quality of relationship developed with the child has a direct link to the effective practice of teaching the children and guiding them to discover new things and think for themselves. We believe that if the teacher-child relationship is based on mutual respect, active listening and the sharing of knowledge and skills, the child’s capacity to learn and discover the world is enhanced.</p>
            <ReadMoreButton
              align="center"
            />
          </div>
        </div>
        <div className="bottom-section">
          <div className="wrapper">
            <div className="junior-school-gallery-container">
              <div className="junior-school-left-image" />
              <div className="junior-school-right-image" />
              <div className="junior-school-middle-image" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

JuniorSchool.propTypes = {
}