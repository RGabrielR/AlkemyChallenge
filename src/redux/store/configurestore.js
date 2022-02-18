import { applyMiddleware, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import monitorReducersEnhancer from './monitorReducerEnhancer'
import logger from './logger'
import rootReducer from '../reducers/rootreducer'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

export default function configureStore(preloadedState) {
  const middlewares = [logger, thunkMiddleware]
  const middlewareEnhancer = applyMiddleware(...middlewares)
  const enhancers = [middlewareEnhancer, monitorReducersEnhancer]
  const composedEnhancers = composeWithDevTools(...enhancers)
  const persistConfig = {key: 'root', storage, }
  const persistedReducer = persistReducer(persistConfig, rootReducer)
  const store = createStore(persistedReducer, preloadedState, composedEnhancers)

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('../reducers/rootreducer', () => store.replaceReducer(rootReducer))
  }
  return store
}