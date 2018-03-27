import ReactDOM from 'react-dom';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Achievers from './components/Achievers';
ReactDOM.render(
		<Achievers />,
  document.querySelector('#app')
);