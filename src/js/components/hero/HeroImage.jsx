import React, { Component } from 'react';

export default class HeroImage extends Component {
  render() {
    let { style } = this.props;
    return (
      <section >
        <div className={style}>
        </div>
      </section>
    );
  }
}