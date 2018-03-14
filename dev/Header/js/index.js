// Below for css files which will be bundled to styles.css
import '../css/styles.scss'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../node_modules/bootstrap/dist/css/bootstrap-theme.css'

import ReactDOM from 'react-dom';
import React from 'react';
import AppNavSection  from './app';

// Below happen under the hood when initializing a custom Element
// var obj = new App()
// obj.props = {}
// obj.render()

//Now when setState is used to change the data then below happens
// state has changed using setState
// obj.render() - this will re-render the virtual dom and custom elements
                  //resulting in props being re-sent


ReactDOM.render(
  <AppNavSection/>,
  document.querySelector('#winsome')
  );