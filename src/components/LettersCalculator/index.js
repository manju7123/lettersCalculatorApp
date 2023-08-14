import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {
    searchInput: '',
  }

  onSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const letters = searchInput.length
    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="heading"> Calculate the Letters you enter </h1>
          <label htmlFor="label-element" className="paragraph">
            Enter the phrase
          </label>
          <input
            id="label-element"
            className="input-element"
            type="text"
            placeholder="Enter the phrase"
            onChange={this.onSearch}
          />
          <p className="btn">No.of letters: {letters}</p>
        </div>
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="Letters calculator"
        />
      </div>
    )
  }
}

export default LettersCalculator
