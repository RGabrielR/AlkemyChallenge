import rootReducer from './reducers/rootreducer';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

const initialState= {};
const middleware = [thunk];
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));

export default store;