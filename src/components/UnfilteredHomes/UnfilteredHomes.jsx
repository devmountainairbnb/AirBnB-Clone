import React, { Component } from 'react'
import { getHomesAustin, getHomesTopRated, getHomes } from './../../ducks/homesReducer'
import { connect } from 'react-redux'
import HomeCard from './../HomeCard/HomeCard'
import HeaderLoggedIn from './../Header/HeaderLoggedIn'
import Footer from './../../components/Footer/Footer'
import thoughtBubble from './thought-bubble.png'
import star from './star.png'
import house from './house.png'
import './UnfilteredHomes.css'

class UnfilteredHomes extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
        this.props.getHomes()
        this.props.getHomesAustin()
        this.props.getHomesTopRated()
    }

    render() {
        let homes = this.props.homes.homes.map((home, i) => {
            return <HomeCard key={home.title} home={home}/>
        })
        let topRatedHomes = this.props.homes.topRatedHomes.map((home, i) => {
            return <HomeCard key={home.title} home={home}/>
        })
        let homesAustin = this.props.homes.austinHomes.map((home, i) => {
            return <HomeCard key={home.title} home={home}/>
        })

        return (
            <div>
                <HeaderLoggedIn/>
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
                    <div className="homes-display-container">{topRatedHomes}</div> 
                </div>

                <h4 id="show-all">Show all (2000+) ></h4>

                <div className="traveling-bar-container">
                    <h2>Traveling on Airbnb</h2>
                    <div className="support-standards-hosts">
                        <div className="24-7-support">
                            <img src={thoughtBubble} alt=""/>
                            <h4>24/7 customer support</h4>
                            <p>Day or night, we're here for you. Talk to our support team from anywhere in the world, any hour of day.</p>
                        </div>
                        <div className="global-hospitality">
                            <img src={house} alt=""/>
                            <h4>Global Hospitality Standards</h4>
                            <p>Guests review their hosts after each stay. All hosts must maintain a minimum rating and our hospitality standards to be on Airbnb.</p>
                        </div>
                        <div className="5-star-hosts">
                            <img src={star} alt=""/>
                            <h4>5-star hosts</h4>
                            <p>From fresh-pressed sheets to tips on where to get the best brunch, our hosts are full of local hospitality.</p>
                        </div>
                    </div>
                </div>

                <div className="picked-homes-container">
                    <h2>Homes in Austin, TX</h2>
                    <div className="homes-display-container">{homesAustin}</div>
                </div>
                
                <div className="picked-homes-container">
                    <h2>300+ Homes</h2>
                    <div className="homes-display-container">{homes}</div>
                </div>
                
                <Footer/>
            </div>
        )
    }
}

function mapStatetoProps(reduxStoreState) {
    return {
        homes: reduxStoreState.homes,
        topRatedHomes: reduxStoreState.homes
    }
}

export default connect(mapStatetoProps, {getHomesAustin, getHomesTopRated, getHomes})(UnfilteredHomes)