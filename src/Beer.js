import React from 'react'

const RecipeRecs = (props) => (
  <li className="mb2">{props.recipe}</li>
)

const Beer = (props) => (
  <div
    className="flex w-50-l bt bw2 pv3 items-center">
    <div className="w-10-l w-20">
      <img
        src={props.image_url}
        alt={props.name}
      />
    </div>

    <div className="pl3 self-start">
      <p className="f4 fw9 baskerville  mv0">Name</p>
      <p className="f5 mv0">{ props.name }</p>

      <p className="f4 fw9 baskerville  mt4 mb1">Recipe Recommendations</p>
      <ul className="f5 mv0 list pl0">
        { props.food_pairing.map((p, i) => <RecipeRecs recipe={p} key={i} />) }
      </ul>
    </div>

  </div>
)

export default Beer
