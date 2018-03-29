import React, { Component } from 'react';

export default class HeroImage extends Component {
  render() {
    let { headerImage, heroImage } = this.props;
    return (
      <section >
        <div id={ heroImage.id === 1 && "hero-image" || headerImage.id === 2 && "hero-image"}>
        </div>
      </section>
    );
  }
}