import React, { Component } from 'react'
import './Footer.css'

export class Footer extends Component {
    constructor(props) {
        super(props);
        this.state={
            expand: false
        }
    }
  render() {
    return this.state.expand ? (
      <div className="full-footer" onClick={() => this.setState({expand: !this.state.expand})}>
        <div className="footer-content">
            <p>2019 Airbnb, Inc. All rights reserved.</p>
            <div className="english-usd">
                <p>English</p>
                <p>USD</p>
            </div>
        </div>
      </div>
    ) : (
        <div className="sticky-footer" onClick={() => this.setState({expand: !this.state.expand})}>
        <img src="https://cdn.pixabay.com/photo/2016/09/20/03/22/earth-1681722_960_720.png" alt=""/>
            Terms, Privacy, Currency &#38; More
        </div>
    )
  }
}

export default Footer
