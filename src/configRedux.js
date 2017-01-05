import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

var initialState = {}

var finalCreateStore = compose(
  typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
)(createStore)

var createStoreWithMiddleware = applyMiddleware(
  thunk
)(finalCreateStore)

var configureStore = function (intialState) {
  return createStoreWithMiddleware(rootReducer, intialState)
}

var store = configureStore(initialState)

export default store
