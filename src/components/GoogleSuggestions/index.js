// Write your code here
import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onArrowClick = suggestion => this.setState({searchInput: suggestion})

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props

    return (
      <div className="google-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png "
          alt="google logo"
          className="google-logo"
        />
        <div className="container-card">
          <div className="container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="search-icon"
            />
            <input
              type="search"
              className="search-input"
              placeholder="Search Google"
              value={searchInput}
              onChange={this.onChangeSearchInput}
            />
          </div>
          <ul className="google-list">
            {suggestionsList.map(eachItem => (
              <SuggestionItem
                key={eachItem.id}
                suggestionItemList={eachItem}
                onArrowClick={this.onArrowClick}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
