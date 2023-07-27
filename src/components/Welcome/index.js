// Write your code here

import './index.css'
import {Component} from 'react'

class Welcome extends Component {
  state = {
    text: 'Subscribe',
  }

  buttonClick = () => {
    this.setState(prev => {
      if (prev.text === 'Subscribe') {
        return {
          text: 'Subscribed',
        }
      }
      return {
        text: 'Subscribe',
      }
    })
  }

  click = () => {
    const {text} = this.state
    return (
      <button className="button" type="button" onClick={this.buttonClick}>
        {text}
      </button>
    )
  }

  render() {
    return (
      <div className="bg-container">
        <h1 className="heading">Welcome</h1>
        <p className="description">Thank you! Happy Learning</p>
        {this.click()}
      </div>
    )
  }
}

export default Welcome
