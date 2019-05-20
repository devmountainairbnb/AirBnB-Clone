import React, { Component } from 'react'
import './Header.css'
import logo from './../Home/backgrounds/airbnb-red.png'
import { connect } from 'react-redux'
import { getData } from './../../ducks/userReducer'
import logoTeal from './../Home/backgrounds/airbnb-teal.png'
import { BookingCardInput, LinkTeal, LinkRed } from './../../components/StyledComponents/StyledComponents'
import { Link } from 'react-router-dom'
import axios from 'axios'


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showMenu: false
        }
    }

    logout = async () => {
        await axios.get('/auth/logout')
        .catch(err => {console.log(err)})
        
      }

    componentDidMount() {
        this.props.getData()
    }
    render() {
        let { profile_pic_url } = this.props.user
        return this.props.user.user_id ? (
            <header className="header-container">
                <div className="header-top-left-content">
                    <Link to="/"><img className="airbnb-logo" src={logoTeal} alt="" /></Link>
                    <BookingCardInput placeholder="Anywhere &#8226; Homes" />
                </div>
                <div className="header-top-right-content">
                    <LinkTeal to='/newProperty'>Add Listing</LinkTeal>
                    <LinkTeal to='/newProperty'>Host</LinkTeal>
                    <LinkTeal>Saved</LinkTeal>
                    <LinkTeal>Trips</LinkTeal>
                    <LinkTeal>Help</LinkTeal>
                    <img 
                        src={profile_pic_url}
                        alt=""
                        onClick={() => this.setState({showMenu: !this.state.showMenu})}
                    />
                    <div onClick={() => this.setState({showMenu: !this.state.showMenu})} className={this.state.showMenu ? 'menu slide' : 'menu'}>
                        <LinkTeal>Profile</LinkTeal><hr/>
                        <LinkTeal>Account</LinkTeal><hr/>
                        <LinkTeal>Invite Friends</LinkTeal><hr/>
                        <LinkTeal>Refer Hosts</LinkTeal><hr/>
                        <LinkTeal>Your Guidebook</LinkTeal><hr/>
                        <LinkTeal>Gift Cards</LinkTeal><hr/>
                        <LinkTeal>Airbnb for Work</LinkTeal><hr/>
                        <LinkTeal to='/' onClick={this.logout}>Log Out</LinkTeal>
                    </div>
                </div>
            </header>
        ) : (
            <header className="header-container">
                <div className="header-top-left-content">
                    <Link to='/'><img className="airbnb-logo" src={logo} alt=""/></Link>
                    <BookingCardInput placeholder="Anywhere &#8226; Homes" />
                </div>
                <div className="header-top-right-content">
                    <LinkRed to='/newProperty'>Become a host</LinkRed>
                    <LinkRed>Help</LinkRed>
                    <LinkRed>Sign Up</LinkRed>
                    <LinkRed to="/">Log in</LinkRed>
                </div>
            </header>

        )
    }
}

function mapStatetoProps(reduxStoreState) {
    return {
        user: reduxStoreState.user
    }
}

export default connect(mapStatetoProps, {getData})(Header)