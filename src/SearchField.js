import Inferno, { linkEvent } from 'inferno'

const handleOnChange = (props, event) => props.updateSearchValue(event.target.value)
const handleOnSubmit = (props, event) => props.submitAndFetch(event)

const SearchField = (props) => (
  <div>
    <form
      className="flex mt4"
      onSubmit={linkEvent(props, handleOnSubmit)}>
      <input
        className="bt-0 br-0 bl-0 bb bw3 f2 fw1 pv2 ph2 flex-auto b--bd-blue"
        type="text"
        onInput={linkEvent(props, handleOnChange)}
        value={props.searchFieldValue}
      />
      <button
        className="bn bg-bd-blue white v-btm f3 fw1 tracked ttu pv2 ph3 disabled cursor-pointer">
        Search
      </button>
    </form>
  </div>
)

export default SearchField
