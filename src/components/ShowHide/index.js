import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {hide1: false, hide2: false}

  toggleButton1 = () => {
    this.setState(prevState => ({hide1: !prevState.hide1}))
  }

  toggleButton2 = () => {
    this.setState(prevState => ({hide2: !prevState.hide2}))
  }

  render() {
    const {hide1, hide2} = this.state

    return (
      <div className="container">
        <h1 className="heading">Show/Hide</h1>
        <div className="twoitems">
          <div className="container1">
            <button type="button" className="but" onClick={this.toggleButton1}>
              Show/Hide Firstname
            </button>
            <div className="cont">
              <p>{hide1 ? 'Joe' : ''}</p>{' '}
            </div>
          </div>

          <div className="container2">
            <button type="button" className="but" onClick={this.toggleButton2}>
              Show/Hide Lastname
            </button>
            <div className="cont">
              <p>{hide2 ? 'Jonas' : ''}</p>{' '}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
