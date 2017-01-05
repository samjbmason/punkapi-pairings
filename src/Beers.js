import React from 'react'
import { connect } from 'react-redux'
import Beer from './Beer'

const mapStateToProps = function (state) {
  return {
    data: state.beerData.data
  }
}

const Beers = (props) => (
  <div className="mt4 flex-l flex-wrap">
    { props.data.map((p, i) => <Beer {...p} key={p.id} />) }
  </div>
)

export default connect(mapStateToProps)(Beers)
