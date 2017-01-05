const UPDATE_SEARCH_VALUE = 'UPDATE_SEARCH_VALUE'
const SAVE_BEER_DATA = 'SAVE_BEER_DATA'
const UPDATE_HAS_RESULTS = 'UPDATE_HAS_RESULTS'
const IS_LOADING = 'IS_LOADING'

// Actions
export const updateSearchValue = (text) => ({
  type: UPDATE_SEARCH_VALUE,
  text
})

export const saveBeerData = (data) => ({
  type: SAVE_BEER_DATA,
  data
})

export const updateHasResults = (hasResults) => ({
  type: UPDATE_HAS_RESULTS,
  hasResults
})

export const isLoading = (status) => ({
  type: IS_LOADING,
  status
})

// Thunks
export const fetchFallbackBeers = () => {
  return function (dispatch) {
    const apiUrl = 'https://api.punkapi.com/v2/beers?ids=106|132|91|126'
    fetch(apiUrl)
      .then((res) => res.json())
      .then((res) => {
        dispatch(saveBeerData(res))
        dispatch(updateHasResults(false))
        dispatch(isLoading(false))
      })
  }
}

export const fetchBeerData = () => {
  return function (dispatch, getState) {
    const state = getState()
    const ingredient = state.searchField.value
    dispatch(isLoading(true))

    const parsedIngredient = ingredient.replace(/ /g, '_')
    const apiUrl = `https://api.punkapi.com/v2/beers?food=${parsedIngredient}`

    fetch(apiUrl)
      .then((res) => res.json())
      .then((res) => {
        if (res.length > 0) {
          dispatch(saveBeerData(res))
          dispatch(updateHasResults(true))
          dispatch(isLoading(false))
        } else {
          dispatch(fetchFallbackBeers())
        }
      })
  }
}

// Reducers
export const searchReducer = (state = { value: '' }, action) => {
  switch (action.type) {
    case UPDATE_SEARCH_VALUE:
      return { value: action.text }
    default:
      return state
  }
}

export const beerDataReducer = (state = { data: [], hasResults: false, isLoading: false }, action) => {
  switch (action.type) {
    case SAVE_BEER_DATA:
      return {...state, data: action.data}
    case UPDATE_HAS_RESULTS:
      return {...state, hasResults: action.hasResults}
    case IS_LOADING:
      return {...state, isLoading: action.status}
    default:
      return state
  }
}
