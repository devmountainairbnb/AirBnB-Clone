import React, { Component } from 'react'
import Header from './../Header/Header'
import './FilteredHomes.css'

class FilteredHomes extends Component {
    render() {
        return (
            <div className="filtered-container">
                <Header/>
                <div className="dates-guests-bar">
                    <p className="dates">Dates</p>
                    <p>Guests</p>
                </div>

                <h2>Explore City</h2>
                <div className="explore-section">
                    <div className="explore-homes">
                        <img src="https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt=""/>
                        <h4>Homes</h4>
                    </div>
                    <div className="explore-experiences">
                        <img src="https://images.unsplash.com/photo-1513883583436-c8bbfbc3b215?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt=""/>
                        <h4>Experiences</h4>
                    </div>
                    <div className="explore-restaurants">
                        <img src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt=""/>
                        <h4>Restaurants</h4>
                    </div>  
                </div>

                <h2>Where To Stay</h2>
                <div className="homes-container">
                    mapping of homes....
                </div>

            </div>
        )
    }
}

export default FilteredHomes