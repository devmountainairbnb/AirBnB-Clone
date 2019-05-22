import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from './../Header/Header'
import Footer from './../Footer/Footer'
import { getLastHome } from './../../ducks/homesReducer'
import { ListingButton } from './../StyledComponents/StyledComponents'
import { Link } from 'react-router-dom'
import './NewPropConfirm.css'

export class NewPropConfirm extends Component {
componentDidMount() {
    this.props.getLastHome()
}

render() {
    let lastHome = this.props.homes.lastHome.map((home, i ) => {
        return (
            <div key={i} className="property-info">
                <p>Listing Title: {home.title}</p>
                <p>Cost: ${home.cost} per night</p>
                <p>Rooms: {home.rooms} Guests: {home.guests}</p>
                <p>Beds: {home.bed} Baths: {home.bath}</p>
            </div>
        )
    })
    console.log(this.props.homes.lastHome)
    return (
      <div className="property-confirm">
        <Header/>
        <div className="main-content-prop">
            <div>
                <h1>Congratulations!</h1>
                <h2>your posting is now viewable and ready to book!</h2>
            </div>
            <div>
                <h4>Summary of details:</h4>
                {lastHome}
            </div>
            <Link to="/"><ListingButton congrats>Confirm and return to homepage</ListingButton></Link>
        </div>
        
        <Footer/>
      </div>
    )
  }
}

function mapStatetoProps(reduxStoreState) {
    return {
        homes: reduxStoreState.homes
    }
}

export default connect(mapStatetoProps, {getLastHome})(NewPropConfirm)
