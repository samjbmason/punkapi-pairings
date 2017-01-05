import React from 'react'

const SearchField = (props) => {
  const handleOnChange = (e) => props.updateSearchValue(e.target.value)
  const handleOnSubmit = (e) => props.submitAndFetch(e)

  return (
    <div>
      <form
        className="flex mt4"
        onSubmit={handleOnSubmit}>
        <input
          className="bt-0 br-0 bl-0 bb bw3 f2 fw1 pv2 ph2 flex-auto b--bd-blue"
          type="text"
          onChange={handleOnChange}
          value={props.searchFieldValue}
        />
        <button
          className="bn bg-bd-blue white v-btm f3 fw1 tracked ttu pv2 ph3 disabled cursor-pointer">
          Search
        </button>
      </form>
    </div>
  )
}

export default SearchField
