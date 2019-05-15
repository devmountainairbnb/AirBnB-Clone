import React, { Component } from 'react'
import './Home.css'
import chillbus from './backgrounds/chillbus2.jpg'
import logo from './backgrounds/airbnb-red.png'
import whiteLogo from './backgrounds/airbnb-512.png'
import { BookingCardInput, BookingCardButton, BookingDateInput, CancelButton, LoginButton } from './../StyledComponents/StyledComponents'
import axios from 'axios'
import { connect } from 'react-redux'
import { getEightHomes, getHomes } from './../../ducks/homesReducer'
import Footer from './../Footer/Footer'
import banner from './backgrounds/banner.jpg'
// import { Link } from 'react-router-dom'

class Home extends Component {
    constructor() {
        super()

        this.state = {
            toggleLogin: false,
            toggleSignup: false,
            first_name: '',
            last_name: '',
            profile_pic_url: '',
            phone: '',
            email: '',
            password: '',
            recommended: [
                { name: 'Los Angeles', cost: 131, img: 'https://images.unsplash.com/photo-1503891450247-ee5f8ec46dc3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' },
                { name: 'London', cost: 123, img: 'https://images.unsplash.com/photo-1481014472607-f71254019973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' },
                { name: 'Barcelona', cost: 103, img: 'https://images.unsplash.com/photo-1511527661048-7fe73d85e9a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' },
                { name: 'New York', cost: 126, img: 'https://images.unsplash.com/photo-1520222984843-df35ebc0f24d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' },
                { name: 'San Francisco', cost: 169, img: 'https://images.unsplash.com/photo-1533609209125-a94e5577125f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' }
            ]

        }
    }

    componentDidMount() {
        this.props.getEightHomes()
    }

    async login() {
        const { email, password } = this.state
        const response = await axios.post('/auth/login', { email, password })
        if (response.data.loggedIn) {
            // this.props.history.push('/')
            console.log('user is logged in')
        }
        else {
            console.log('Incorrect login')
        }
        this.setState({
            email: '',
            password: '',
            toggleLogin: false
        })
    }

    async register() {
        const { first_name, last_name, phone, email, password, profile_pic_url } = this.state
        let response = await axios.post('auth/register', { first_name, last_name, phone, profile_pic_url, email, password })
        if (response.data.loggedIn) {
            console.log('user is registered')
        }
        else {
            console.log('email is already in use.')
        }
        this.setState({
            first_name: '',
            last_name: '',
            profile_pic_url: '',
            phone: '',
            email: '',
            password: '',
            toggleSignup: false
        })
    }

    handleInputChange(name, value) {
        this.setState({
            [name]: value
        })
    }

    render() {
        let { eightHomes } = this.props.homes
        console.log(this.props.homes)
        let { toggleLogin, toggleSignup, recommended } = this.state
        let mapPlaces = recommended.map(place => {
            return (
                <div className="place-relative" key={place.name}>
                    <img className="place-container" src={place.img} alt={place.name} />
                    <div className="text-absolute">
                        <div>{place.name}</div>
                        <div className="place-cost">${place.cost}/night average</div>
                    </div>
                </div>
            )
        })
        let mapHomes = eightHomes.map(home => {
            return (
                    <div className="house-box">
                        <img className="home-img" src={home.image_url[0]} alt="" />
                        <div>{home.title[0]}</div>
                        <div className="cost-per-night">${home.cost[0]} per night</div>
                        <h6><span style={{ color: "#00797E" }}>&#9733;&#9733;&#9733;&#9733;&#9733;</span> &#8729;Superhost</h6>
                    </div>
            )
        })
        //Ternary here for the ability to darken screen on signup and login
        return (
            <div className="flex-column">
                <div className="homeheader-relative">
                    {/* login toggle */}
                    <div className={toggleLogin ? 'login' : 'login hidden'}>
                        <CancelButton onClick={() => this.setState({ toggleLogin: !this.state.toggleLogin })}>X</CancelButton>
                        <BookingCardInput value={this.state.email} name="email" onChange={(e) => this.handleInputChange('email', e.target.value)} login placeholder="Email Address" />
                        <BookingCardInput value={this.state.password} name="password" onChange={(e) => this.handleInputChange('password', e.target.value)} login placeholder="Password" />
                        <div className="flex-remember">
                            <div>
                                <input type="checkbox"></input>
                                Remember Me
                            </div>
                            <div>Show Password</div>
                        </div>
                        <LoginButton onClick={() => this.login()} login>Login</LoginButton>
                    </div>
                    {/* Signup toggle */}
                    <div className={toggleSignup ? 'signup' : 'signup hidden'}>
                        <CancelButton onClick={() => this.setState({ toggleSignup: !this.state.toggleSignup })}>X</CancelButton>
                        <BookingCardInput value={this.state.first_name} name="first_name" onChange={(e) => this.handleInputChange('first_name', e.target.value)} placeholder="First Name"></BookingCardInput>
                        <BookingCardInput value={this.state.last_name} name="last_name" onChange={(e) => this.handleInputChange('last_name', e.target.value)} placeholder="Last Name"></BookingCardInput>
                        <BookingCardInput value={this.state.phone} name="phone" onChange={(e) => this.handleInputChange('phone', e.target.value)} placeholder="Phone Number"></BookingCardInput>
                        <BookingCardInput value={this.state.profile_pic_url} name="profile_pic_url" onChange={(e) => this.handleInputChange('profile_pic_url', e.target.value)} placeholder="Profile Pic Url"></BookingCardInput>
                        <BookingCardInput value={this.state.email} name="email" onChange={(e) => this.handleInputChange('email', e.target.value)} placeholder="Email"></BookingCardInput>
                        <BookingCardInput value={this.state.password} name="password" onChange={(e) => this.handleInputChange('password', e.target.value)} placeholder="Password"></BookingCardInput>
                        <LoginButton onClick={() => this.register()} login>Sign Up</LoginButton>
                    </div>
                    <div className={toggleLogin || toggleSignup ? "dark" : ''}>
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
                                <BookingCardInput className="padding-input" placeholder="Anywhere" />
                            </div>
                            <div>
                            </div>
                            <div className="flex-check-inout">
                                <div>
                                    <div>CHECK-IN</div>
                                    <BookingDateInput className="padding-input" placeholder="mm/dd/yyyy"></BookingDateInput>
                                </div>
                                <div>
                                    <div>CHECKOUT</div>
                                    <BookingDateInput className="padding-input" placeholder="mm/dd/yyyy"></BookingDateInput>
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
                        <Footer />
                    </div>
                </div>
                <div className="explore-box">
                    <h4 className="explore-airbnb">Explore Airbnb</h4>
                    <div className="explore-container">
                        <div className="explore-content">
                            <img src="https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="" />
                            <h4 className="space">Homes</h4>
                        </div>
                        <div className="explore-content">
                            <img src="https://images.unsplash.com/photo-1513883583436-c8bbfbc3b215?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="" />
                            <h4 className="space">Experiences</h4>
                        </div>
                        <div className="explore-content">
                            <img src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="" />
                            <h4 className="space">Restaurants</h4>
                        </div>
                    </div>
                </div>
                <div className="explore-box">
                    <h4 className="recommended-for-you">Recommended for you</h4>
                    <div className="recommended-pictures-box">
                        {mapPlaces}
                    </div>
                </div>
                <div className="banner-center">
                    <img className="banner-img" src={banner} alt="" />
                    <div className="absolute-to-banner">
                        <div className="flex-logo-experience">
                            <img width="15" src={whiteLogo} alt="" />
                            <span>EXPERIENCES</span>
                        </div>
                        <h3>Because you don't <br></br> travel to sleep.</h3>
                        <p>Memorable activities led by locals, <br></br> created for the curious.</p>
                        <button>LEARN MORE</button>
                    </div>
                </div>
                <div className="explore-box2">
                    <h4 className="recommended-for-you">Homes around the world</h4>
                    <div className="flex-homes">
                        {mapHomes}
                    </div>
                </div>
            </div>
        )
    }
}

function mapStatetoProps(reduxStoreState) {
    return {
        homes: reduxStoreState.homes
    }
}

export default connect(mapStatetoProps, { getEightHomes, getHomes })(Home)