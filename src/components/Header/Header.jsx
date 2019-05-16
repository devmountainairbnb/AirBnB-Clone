import React, { Component } from 'react'
import './Header.css'
import logo from './../Home/backgrounds/airbnb-red.png'

class Header extends Component {
    render() {
        return (
            <header className="header-container">
                <div className="header-top-left-content">
                    <img className="airbnb-logo" src={logo} alt=""/>
                    <input></input>
                </div>
                <div className="header-top-right-content">
                    <div>Become a host</div>
                    <div>Help</div>
                    <div>Sign Up</div>
                    <div>Log in</div>
                </div>
            </header>
        )
    }
}

export default Header