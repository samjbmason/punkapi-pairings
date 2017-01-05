import { combineReducers } from 'redux'
import { searchReducer, beerDataReducer } from './duck'

export default combineReducers({
  searchField: searchReducer,
  beerData: beerDataReducer
})
