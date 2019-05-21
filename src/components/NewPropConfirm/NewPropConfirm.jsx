import React, { Component } from 'react'
import { connect } from 'react-redux'
import Footer from './../Footer/Footer'
import { getLastHome } from './../../ducks/homesReducer'
import { ListingButton } from './../StyledComponents/StyledComponents'
import { Link } from 'react-router-dom'
import './NewPropConfirm.css'

export class NewPropConfirm extends Component {
componentDidMount() {
    console.log(this.props.getLastHome())
}

render() {
    let lastHome = this.props.homes.lastHome.map((home, i ) => {
        return (
            <div key={i} className="property-info">
                <p>Listing Title: {home.title[0]}</p>
                <p>Cost: ${home.cost[0]} per night</p>
                <p>Rooms: {home.rooms[0]} Guests: {home.guests[0]}</p>
                <p>Beds: {home.bed[0]} Baths: {home.bath[0]}</p>
            </div>
        )
    })

    return (
      <div className="property-confirm">
        <div className="property-congrats">
            <h1>Congratulations!</h1>
            <h2>your posting is now viewable and ready to book!</h2>
        </div>
        <div className="property-details">
            <h4>Summary of details:</h4>
            {lastHome}
        </div>
        <Link to="/"><ListingButton congrats>Confirm and return to homepage</ListingButton></Link>
        
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
