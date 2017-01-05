import Inferno from 'inferno'

import StateContainer from './StateContainer'
import Footer from './Footer'

const App = (props) => (
  <div className="mw8 ph2 ph5-ns center sans-serif">
    <h1 className="f-subheadline f-headline-ns fw9 baskerville mv0">
      Pairings
    </h1>
    <h2 className="f5 fw5 tracked ttu bd-blue mt1">
      Choose an ingredient & find a Brewdog beer that's perfect for it.
    </h2>

    <StateContainer />

    <Footer />
  </div>
)

export default App
