import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './redux/store/configurestore'
import { persistStore, persistReducer } from 'redux-persist'
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
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
