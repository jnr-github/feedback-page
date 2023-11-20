// Write your React code here.
import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {feedbackSelected: false}

  onChangeFeedback = () => this.setState({feedbackSelected: true})

  ifTrue = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="happy-container">
        <img alt="love emoji" className="emoji" src={loveEmojiUrl} />
        <h1 className="heading">Thank you!</h1>
        <p className="para">
          We will use your feedback to improve to improve our customer support
          performance
        </p>
      </div>
    )
  }

  ifFalse = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div className="happy-container">
        <h1 className="heading">
          How satisfied are you with our customer support performance?
        </h1>
        <ul className="list-items">
          {emojis.map(emoji => (
            <li key={emoji.id}>
              <button type="button" onClick={this.onChangeFeedback}>
                <img alt={emoji.name} className="emoji" src={emoji.imageUrl} />
                <br />
                <span className="para">{emoji.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {feedbackSelected} = this.state

    return (
      <div className="app-container">
        <div className="feedback-container">
          {feedbackSelected ? this.ifTrue() : this.ifFalse()}
        </div>
      </div>
    )
  }
}

export default Feedback
