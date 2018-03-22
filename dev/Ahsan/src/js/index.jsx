import ReactDOM from 'react-dom';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './reducers';
import App from './components/App';

const store = createStore(rootReducer);


ReactDOM.render(
	<Provider store={store}>  
		<App />
	</Provider>,
  document.querySelector('#app')
);