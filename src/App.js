import React from 'react'
import { connect } from 'react-redux'

import SearchForm from './SearchFormHOC'
import Beers from './Beers'
import Footer from './Footer'

const mapStateToProps = function (state) {
  return {
    hasResults: state.beerData.hasResults || state.beerData.isLoading
  }
}

const App = (props) => (
  <div className="mw8 ph5 center sans-serif">
    <h1 className="f-headline fw9 baskerville mv0">
      Pairings
    </h1>
    <h2 className="f5 fw5 tracked ttu bd-blue mt1">
      Choose an ingredient & find a Brewdog beer that's perfect for it.
    </h2>

    <SearchForm />

    {!props.hasResults &&
      <p>Sorry it looks like we didn't find any pairings, but you can't really go wrong with the ones below.</p>
    }

    <Beers />

    <Footer />
  </div>
)

export default connect(mapStateToProps)(App)
