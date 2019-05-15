import React, { Component } from 'react'
import './HeaderLoggedIn.css'
import logo from './../Home/backgrounds/airbnb-red.png'
import { BookingCardInput } from './../../components/StyledComponents/StyledComponents'

class HeaderLoggedIn extends Component {
    render() {
        return (
            <header className="header-container">
                <div className="header-top-left-content">
                    <img className="airbnb-logo" src={logo} alt="" />
                    <BookingCardInput placeholder="Anywhere &#8226; Homes" />
                </div>
                <div className="header-top-right-content">
                    <div>Add Listing</div>
                    <div>Host</div>
                    <div>Saved</div>
                    <div>Trips</div>
                    <div>Help</div>
                    <img src="http://placehold.jp/006699/cccc00/35x35.jpg" alt="" />
                </div>
            </header>
        )
    }
}

export default HeaderLoggedIn