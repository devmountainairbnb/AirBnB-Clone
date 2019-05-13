import React, { Component } from 'react'
import './Home.css'
import chillbus from './backgrounds/chillbus.jpg'
import logo from './backgrounds/airbnb-red.png'
import { BookingCardInput, BookingCardButton, BookingDateInput, CancelButton, LoginButton } from './../StyledComponents/StyledComponents'
// import { connect } from 'react-redux'
// import { getData } from './../../ducks/userReducer'    

class Home extends Component {
    constructor() {
        super()

        this.state = {
            toggleLogin: false,
            toggleSignup: false
        }
    }

    componentDidMount() {

    }

    render() {
        let { toggleLogin, toggleSignup } = this.state
        return (
            <div>
                <div className="homeheader-relative">
                    {/* login toggle */}
                    <div className={toggleLogin ? 'login' : 'login hidden'}>
                        <CancelButton onClick={() => this.setState({ toggleLogin: !this.state.toggleLogin })}>X</CancelButton>
                        <BookingCardInput login placeholder="Email Address" />
                        <BookingCardInput login placeholder="Password" type="password" />
                        <div className="flex-remember">
                            <div>
                                <input type="checkbox"></input>
                                Remember Me
                            </div>
                            <div>Show Password</div>
                        </div>
                        <LoginButton login>Login</LoginButton>
                    </div>
                    <header className="home-header-container">
                        <div className="header-top-left-content">
                            {/* Logo in the top right */}
                            <img className="airbnb-logo" src={logo} alt="" />
                        </div>
                        {/* links in the top left */}
                        <div className="header-top-right-content">
                            <div className="link-styles">Become a host</div>
                            <div className="link-styles">Help</div>
                            <div onClick={() => this.setState({ toggleSignup: !this.state.toggleSignup })} className="link-styles">Sign Up</div>
                            <div onClick={() => this.setState({ toggleLogin: !this.state.toggleLogin })} className="link-styles" >Log in</div>
                        </div>
                    </header>
                    <img className="background-img" src={chillbus} alt="" />
                    {/* book unique homes box */}
                    <div className="book-home-content">
                        <div className="book-unique-homes">Book unique homes and experiences.</div>
                        <div>
                            <div>WHERE</div>
                            <BookingCardInput placeholder="Anywhere" />
                        </div>
                        <div>
                        </div>
                        <div className="flex-check-inout">
                            <div>
                                <div>CHECK-IN</div>
                                <BookingDateInput type="date"></BookingDateInput>
                            </div>
                            <div>
                                <div>CHECKOUT</div>
                                <BookingDateInput type="date"></BookingDateInput>
                            </div>
                        </div>
                        <div>
                            <div className="margin-top-guests">GUESTS</div>
                            <select className="guests-dropdown">
                                <option>Guests</option>
                            </select>
                        </div>
                        <BookingCardButton>Search</BookingCardButton>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home