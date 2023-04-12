import './index.css'

const SuggestionItem = props => {
  const {Details, arrowFunc} = props
  const {suggestion} = Details
  const arrowClicked = () => {
    arrowFunc(suggestion)
  }
  return (
    <li className="indSearchItemList">
      <p className="suggestionCSS">{suggestion}</p>
      <button className="arrow-button" type="button" onClick={arrowClicked}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrowCSS"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
