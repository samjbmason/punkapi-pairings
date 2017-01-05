import React from 'react'
import sample from 'lodash/sample'
import SearchField from './SearchField'
import Beers from './Beers'

const exampleIngredients = [
  'cheese',
  'cream',
  'beef',
  'chicken',
  'mint',
  'vanilla',
  'lamb',
  'carrot'
]

const initialState = {
  searchField: {
    value: ''
  },
  beerData: {
    data: [],
    hasResults: false,
    isLoading: false
  }
}

class StateContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = initialState
    this.updateSearchValue = this.updateSearchValue.bind(this)
    this.fetchRandomIngredient = this.fetchRandomIngredient.bind(this)
    this.fetchBeerData = this.fetchBeerData.bind(this)
    this.submitAndFetch = this.submitAndFetch.bind(this)
    this.fetchFallbackBeers = this.fetchFallbackBeers.bind(this)
  }

  componentDidMount () {
    this.fetchRandomIngredient()
  }

  updateSearchValue (text) {
    this.setState({
      searchField: { value: text }
    })
  }

  submitAndFetch (e) {
    e.preventDefault()
    const ingredient = this.state.searchField.value
    this.fetchBeerData(ingredient)
  }

  fetchBeerData (ingredient) {
    const parsedIngredient = ingredient.replace(/ /g, '_')
    const apiUrl = `https://api.punkapi.com/v2/beers?food=${parsedIngredient}`

    return fetch(apiUrl)
      .then((res) => res.json())
      .then((res) => {
        if (res.length > 0) {
          this.setState({
            beerData: { data: res, hasResults: true, isLoading: false }
          })
        } else {
          this.fetchFallbackBeers()
        }
      })
  }

  fetchFallbackBeers () {
    const apiUrl = 'https://api.punkapi.com/v2/beers?ids=106|132|91|126'
    fetch(apiUrl)
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          beerData: { data: res, hasResults: false, isLoading: false }
        })
      })
  }

  fetchRandomIngredient () {
    const ingredient = sample(exampleIngredients)
    this.fetchBeerData(ingredient)
    this.setState({
      searchField: { value: ingredient },
      beerData: { ...this.state.beerData,  isLoading: true }
    })
  }

  render () {
    return (
      <div>
        <SearchField
          updateSearchValue={this.updateSearchValue}
          searchFieldValue={this.state.searchField.value}
          submitAndFetch={this.submitAndFetch}
        />

        { (!this.state.beerData.hasResults || this.state.beerData.isLoading) &&
          <p>Sorry it looks like we didn't find any pairings, but you can't really go wrong with the ones below.</p>
        }

        <Beers
          data={this.state.beerData.data}
        />
      </div>
    )
  }
}


export default StateContainer
