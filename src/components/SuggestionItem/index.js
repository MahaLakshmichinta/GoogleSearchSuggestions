// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionItemList, onArrowClick} = props
  const {suggestion} = suggestionItemList

  const clickArrow = () => {
    onArrowClick(suggestion)
  }

  return (
    <li className="list-container">
      <div className="list-card-container">
        <p className="para">{suggestion}</p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png "
          alt="arrow"
          className="arrow"
          onClick={clickArrow}
        />
      </div>
    </li>
  )
}
export default SuggestionItem
