import React, { Component } from 'react'
import chillbus from './backgrounds/chillbus2.jpg'
import logo from './backgrounds/airbnb-red.png'
import whiteLogo from './backgrounds/airbnb-512.png'
import { BookingCardInput, BookingCardButton, CancelButton, LoginButton, CounterButton } from './../StyledComponents/StyledComponents'
import axios from 'axios'
import { connect } from 'react-redux'
import { getEightHomes, getHomes, getCities } from './../../ducks/homesReducer'
import { Link } from 'react-router-dom'
import { getData } from './../../ducks/userReducer'
import 'react-dates/initialize'
import { DateRangePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'
import './Home.css'
import Footer from './../Footer/Footer'
import banner from './backgrounds/banner.jpg'

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
            toggleGuests: false,
            guests: 0
        }
    }

    componentDidMount() {
        this.props.getData()
        this.props.getEightHomes()
        this.props.getCities()
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

    handleAddGuests = () => {
        this.setState({
            guests: this.state.guests + 1
        })
    }
    handleSubtractGuests = () => {
        if(this.state.guests >= 1) {
            this.setState({
                guests: this.state.guests - 1
            })
        }
        else {
            this.setState({
                guests: 0
            })
        }
    }

    render() {
        let { eightHomes } = this.props.homes
        let { cities } = this.props.homes
        let { toggleLogin, toggleSignup } = this.state
        let mapPlaces = cities.map(place => {
            console.log(place)
            return (
                <Link to={`/filteredhomes/${place.city_id}`}>
                    <div className="place-relative" key={place.name}>
                        <img className="place-container" src={place.city_img} alt={place.name} />
                        <div className="text-absolute">
                            <div>{place.city_name}</div>
                            <div className="place-cost">${place.avg_cost}/night average</div>
                        </div>
                    </div>
                </Link>
            )
        })

        let mapHomes = eightHomes.map(home => {
            return (
                <Link to={`/listing/${home.property_id}`} style={{ textDecoration: 'none' }}>
                    <div className="house-box">
                        <img className="home-img" src={home.img_url} alt="" />
                        <div>{home.title}</div>
                        <div className="cost-per-night">${home.cost} per night</div>
                        <h6><span style={{ color: "#00797E" }}>&#9733;&#9733;&#9733;&#9733;&#9733;</span> &#8729;Superhost</h6>
                    </div>
                </Link>
            )
        })
        //Ternary here for the ability to darken screen on signup and login
        return (
            <div className={toggleSignup || toggleLogin ? 'flex-column dark' : 'flex-column'}>
                <div className="homeheader-relative">
                    {/* login toggle */}
                    <div className={!toggleLogin ? '' : 'dark'}></div>
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
                    <div className={!toggleSignup ? '' : 'dark'}></div>
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
                    {/* <img className="background-img" src={chillbus} alt="" /> */}
                    <div className="background-img"></div>
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
                                <div className="flex-checkinout">
                                    <div>CHECK-IN</div>
                                    <div className='checkout'>CHECKOUT</div>
                                </div>
                                <DateRangePicker
                                    startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                                    startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                                    endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                                    endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                                    onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
                                    focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                                    onFocusChange={focusedInput => this.setState({ focusedInput })}
                                    numberOfMonths={1}
                                    hideKeyboardShortcutsPanel
                                    daySize={30}
                                    endDatePlaceholderText='mm/dd/yyyy'
                                    startDatePlaceholderText='mm/dd/yyyy'

                                />
                            </div>
                        </div>
                        <div>
                            <div className="margin-top-guests" onClick={() => this.setState({toggleGuests: !this.state.toggleGuests})}>
                                <div>{this.state.guests === 1 ?  
                                    <span>{this.state.guests} guest</span> 
                                    : this.state.guests > 1 ? 
                                    <span>{this.state.guests} guests</span> 
                                    : <span>Guests</span>}
                                </div>&#8744;
                            </div>

                            <div className={this.state.toggleGuests ? 'guest-menu toggle' : 'guest-menu'}>
                                <div className="guest-options">
                                    <h3>Adults</h3>
                                    <span>
                                        <CounterButton onClick={this.handleSubtractGuests}>-</CounterButton> {this.state.guests} <CounterButton onClick={this.handleAddGuests}>+</CounterButton>
                                    </span>
                                </div>
                                <div className="guest-options">
                                    <span><h3>Children</h3>
                                    <p>Ages 2-12</p></span>
                                    <span>
                                        <CounterButton onClick={this.handleSubtractGuests}>-</CounterButton> 0 <CounterButton>+</CounterButton>
                                    </span>
                                </div>

                                <div className="guest-options">
                                    <span><h3>Infants</h3>
                                    <p>Under 2</p></span> 
                                    <span>
                                         <CounterButton >-</CounterButton> 0 <CounterButton>+</CounterButton>
                                    </span>   
                                </div>
                                
                                <h2 onClick={() => this.setState({toggleGuests: !this.state.toggleGuests})}>Apply</h2>
                            </div>
                            {/* <select className="guests-dropdown">
                                <option>Guests</option>
                            </select> */}
                        </div>
                        <BookingCardButton>Search</BookingCardButton>
                    </div>
                    <Footer />
                </div>
                <div className="explore-box">
                    <h4 className="explore-airbnb">Explore Airbnb</h4>
                    <div className="explore-container">
                        <Link to="/unfilteredhomes" className="explore-link-tags">
                            <div className="explore-content">
                                <img src="https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="" />
                                <h4 className="space">Homes</h4>
                            </div>
                        </Link>
                        <Link className='explore-link-tags'>
                            <div className="explore-content">
                                <img src="https://images.unsplash.com/photo-1513883583436-c8bbfbc3b215?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="" />
                                <h4 className="space">Experiences</h4>
                            </div>
                        </Link>
                        <Link className='explore-link-tags'>
                            <div className="explore-content">
                                <img src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="" />
                                <h4 className="space">Restaurants</h4>
                            </div>
                        </Link>
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
        homes: reduxStoreState.homes,
        userData: reduxStoreState.user
    }
}

export default connect(mapStatetoProps, { getEightHomes, getHomes, getData, getCities })(Home)