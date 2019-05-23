import React, { Component } from 'react'
import Header from './../Header/Header'
import './FilteredHomes.css'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getHomesByCity } from './../../ducks/homesReducer'
import flowerBanner from './../Home/backgrounds/flowerbanner.jpg'

class FilteredHomes extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
        this.props.getHomesByCity(this.props.match.params)
    }

    render() {
        // console.log(this.props.homes.cityHomes[0].city_name)     
        let map = this.props.homes.cityHomes.map(home => {
            return (
                <div className="house-box">
                    <Link to={`/listing/${home.property_id}`} key={home.property_id} style={{ textDecoration: 'none', color: 'black' }}>
                        <img className="home-img" src={home.img_url} alt="" />
                        <div>{home.title}</div>
                        <div className="cost-per-night">${home.cost} per night</div>
                        <h6><span style={{ color: "#00797E" }}>&#9733;&#9733;&#9733;&#9733;&#9733;</span> &#8729;Superhost</h6>
                    </Link>
                </div>
            )
        })
        return (
            <div className="filtered-container">
                <Header />
                <div className="dates-guests-bar">
                    <p className="dates">Dates</p>
                    <p>Guests</p>
                </div>
                <h2>Explore City</h2>
                <div className="explore-section">
                    <div className="explore-homes" onClick={() => this.props.history.push('/unfilteredHomes')}>
                        <img src="https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="" />
                        <h4>Homes</h4>
                    </div>
                    <div className="explore-experiences">
                        <img src="https://images.unsplash.com/photo-1513883583436-c8bbfbc3b215?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="" />
                        <h4>Experiences</h4>
                    </div>
                    <div className="explore-restaurants">
                        <img src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="" />
                        <h4>Restaurants</h4>
                    </div>
                </div>
                <h2>Where To Stay</h2>
                <div className="homes-container">
                    {map}
                </div>
                <div className="flower-banner-box">
                    <img className="flower-banner" src={flowerBanner} alt='' />
                    <div className="flower-banner-content">
                        <div>Earn up to <strong>$1,131</strong>/month hosting your <br></br> home in Lehi</div>
                        <button>Learn more</button>
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

export default connect(mapStatetoProps, { getHomesByCity })(FilteredHomes)