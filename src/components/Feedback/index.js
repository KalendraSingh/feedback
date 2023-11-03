// Write your React code here.
import './index.css'
import {Component} from 'react'

class Feedback extends Component {
  state = {click: true}

  emojiClicked = () => {
    this.setState(prevState => ({click: !prevState.click}))
  }

  render() {
    const {click} = this.state
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources

    return (
      <div className="bgContainer">
        <div className="cardContainer">
          <div>
            <h1>
              How satisfied are you with our customer support performance?
            </h1>
            <ul className="listItemContainer">
              {click ? (
                emojis.map(eachItem => (
                  <li key={eachItem.name}>
                    <div>
                      <img
                        src={eachItem.imageUrl}
                        alt={eachItem.name}
                        onClick={this.emojiClicked}
                      />
                      <p>{eachItem.name}</p>
                    </div>
                  </li>
                ))
              ) : (
                <>
                  <div>
                    <img src={loveEmojiUrl} alt="love emoji" />
                  </div>
                  <h1>Thank You!</h1>
                  <p>
                    We will use your feedback to improve our customer support
                    performance
                  </p>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Feedback
