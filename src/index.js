import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import configureStore from './redux/store/configurestore'
import { persistStore} from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'


const store = configureStore();
const persistor = persistStore(store)
ReactDOM.render(

  <React.StrictMode>
  <Provider store={store}>
 <PersistGate loading={null} persistor={persistor}>
    <App />
     </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./App', ReactDOM.render)
}
reportWebVitals();
