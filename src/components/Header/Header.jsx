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
            showMenu: false,
            showHelpMenu: false,
            input: ''
        }
    }

    logout = async () => {
        await axios.get('/auth/logout')
        .catch(err => {console.log(err)})
        window.location.reload()
      }

      handleInput(val) {
        this.setState({ input: val })
      }

    componentDidMount() {
        this.props.getData()
    }

    render() {
        console.log(this.state.input)
        let { profile_pic_url } = this.props.user
        return this.props.user.user_id ? (
            <header className="header-container">
                <div className="header-top-left-content">
                    <Link to="/"><img className="airbnb-logo" src={logoTeal} alt="" /></Link>

                    <BookingCardInput className={this.state.input ? " searchbar search" : "searchbar"}placeholder="Anywhere &#8226; Homes" onChange={(e) => this.handleInput(e.target.value)} />

                </div>
                <div className="header-top-right-content">
                    <LinkTeal to='/newProperty'>Add Listing</LinkTeal>
                    <LinkTeal to='/newProperty'>Host</LinkTeal>
                    <LinkTeal to='/propertyConfirm'>Saved</LinkTeal>
                    <LinkTeal to='/'>Trips</LinkTeal>
                    <LinkTeal onClick={() => this.setState({showHelpMenu: !this.state.showHelpMenu})}>Help</LinkTeal>
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
                        <div onClick={() => this.setState({showHelpMenu: !this.state.showHelpMenu})} className={this.state.showHelpMenu ? 'helpmenu helpslide' : 'helpmenu'}>
                        <h2>Recommended Help</h2>
                        <h6>Search by keyword</h6>
                        <BookingCardInput placeholder="Ex: reservation status" />
                        <h5>RECOMMENDED ARTICLES</h5>
                        <h3>What is the Airbnb cancellation policy?</h3>
                        <p>Airbnb enables hosts to choose among three standardized cancellation policies (F..</p>
                        <h4>Read more ></h4><br/>
                        <h3>What is I need to cancel because of an<br/>
                        emergency or unavoidable circumstance?</h3>
                        <p>We may be able to give you a refund or waive the<br/> penalties if you have to cancel...</p>
                        <h4>Read more ></h4><br/>
                        <h3>What methods of payment deos Airbnb<br/>accept?</h3>
                        <p>We support different payment methods, which<br/>depend on the country your payment a...</p>
                        <h4>Read more ></h4><br/>
                        <h5>EXPLORE MORE ARTICLES BY TOPIC</h5>
                    </div>

                </div>
            </header>
        ) : (
            <header className="header-container">
                <div className="header-top-left-content">
                    <Link to='/'><img className="airbnb-logo" src={logo} alt=""/></Link>

                    <BookingCardInput className={this.state.input ? " searchbar search" : "searchbar"}placeholder="Anywhere &#8226; Homes" onChange={(e) => this.handleInput(e.target.value)} />

                </div>
                <div className="header-top-right-content">
                    <LinkRed to='/newProperty'>Host a home</LinkRed>
                    <LinkRed to='/newProperty'>Host an experience</LinkRed>
                    <LinkRed onClick={() => this.setState({showHelpMenu: !this.state.showHelpMenu})}>Help</LinkRed>
                    <LinkRed to='/'>Sign Up</LinkRed>
                    <LinkRed to="/">Log in</LinkRed>
                </div>
                <div onClick={() => this.setState({showHelpMenu: !this.state.showHelpMenu})} className={this.state.showHelpMenu ? 'helpmenu helpslide' : 'helpmenu'}>
                <h2>Recommended Help</h2>
                <h6>Search by keyword</h6>
                <BookingCardInput placeholder="Ex: reservation status" />
                <h5>RECOMMENDED ARTICLES</h5>
                <h3>What is the Airbnb cancellation policy?</h3>
                <p>Airbnb enables hosts to choose among three standardized cancellation policies (F..</p>
                <h4>Read more ></h4><br/>
                <h3>What is I need to cancel because of an<br/>
                emergency or unavoidable circumstance?</h3>
                <p>We may be able to give you a refund or waive the<br/> penalties if you have to cancel...</p>
                <h4>Read more ></h4><br/>
                <h3>What methods of payment deos Airbnb<br/>accept?</h3>
                <p>We support different payment methods, which<br/>depend on the country your payment a...</p>
                <h4>Read more ></h4><br/>
                <h5>EXPLORE MORE ARTICLES BY TOPIC</h5>
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