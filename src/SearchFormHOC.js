import React from 'react'
import { connect } from 'react-redux'
import sample from 'lodash/sample'
import { updateSearchValue, fetchBeerData, isSearchFieldEmpty } from './duck'
import SearchField from './SearchField'

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

const mapStateToProps = function (state) {
  return {
    searchFieldValue: state.searchField.value
  }
}

const mapDispatchToProps = function (dispatch) {
  return {
    handleFetchRandomIngredient: () => {
      const randomIngredient = sample(exampleIngredients)
      dispatch(updateSearchValue(randomIngredient))
      dispatch(fetchBeerData())
    },

    handleChange: (e) => {
      dispatch(updateSearchValue(e.target.value))
    },

    handleSubmit: (e) => {
      e.preventDefault()
      dispatch(fetchBeerData())
    }
  }
}

class SearchForm extends React.Component {
  componentDidMount () {
    this.props.handleFetchRandomIngredient()
  }

  render () {
    return (
      <SearchField {...this.props} />
    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(SearchForm)
