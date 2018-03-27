import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Staff from './Staff' ;

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      
    }
  }

  render() {

    return (
      <div className="app">
      <Staff className='staff'/>
      </div>
    );
  }
};