import React, { Component } from 'react'
import Header from './../Header/Header'
import './UnfilteredHomes.css'

class UnfilteredHomes extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="dates-guests-bar">
                    <p className="dates">Dates</p>
                    <p>Guests</p>
                    <p>Home type</p>
                    <p>Price</p>
                    <p>Rooms and Beds</p>
                    <p>Amenities</p>
                    <p>More Filters</p>
                </div>

                <h2 className="travel-h2">Travel the world with Airbnb</h2>
                <div className="travel-world-section">
                    <div className="paris">
                        <img src="https://images.unsplash.com/photo-1458262488536-98366625ae59?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt=""/>
                        <h4>Paris</h4>
                        <h6>France</h6>
                    </div>
                    <div className="new-york">
                        <img src="https://images.unsplash.com/photo-1534430480872-3498386e7856?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt=""/>
                        <h4>New York</h4>
                        <h6>United States</h6>
                    </div>
                    <div className="sydney">
                        <img src="https://images.unsplash.com/photo-1523428096881-5bd79d043006?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt=""/>
                        <h4>Sydney</h4>
                        <h6>Australia</h6>
                    </div>  
                    <div className="cape-town">
                        <img src="https://images.unsplash.com/photo-1526052548799-60c6d6c666b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt=""/>
                        <h4>Cape Town</h4>
                        <h6>South Africa</h6>
                    </div>  
                </div>

                <div className="rated-homes-container">
                    <h2>Top-rated homes</h2>
                    <p>Explore some of the best-reviewed homes in the world</p>
                </div>

                <div className="picked-homes-container">
                    <h2>Homes in *City*</h2>
                </div>

            </div>
        )
    }
}

export default UnfilteredHomes