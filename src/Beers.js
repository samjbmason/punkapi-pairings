import React from 'react'
import Beer from './Beer'

const Beers = (props) => (
  <div className="mt4 flex-l flex-wrap">
    { props.data.map((p, i) => <Beer {...p} key={p.id} />) }
  </div>
)
export default Beers
