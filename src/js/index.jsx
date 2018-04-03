import ReactDOM from 'react-dom';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './reducers';
import App from './components/App';

const store = createStore(rootReducer);

ReactDOM.render(
<<<<<<< HEAD
	<Provider store={store}>
		<App />
	</Provider>,
	document.querySelector('#app')
);

export default store;
=======
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#app')
);
>>>>>>> 0e2bb0bf8a7c4da622c6eee85d4f822541b0cb07
