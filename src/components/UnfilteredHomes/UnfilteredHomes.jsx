import React, { Component } from 'react'
import { getHomesAustin, getHomesTopRated, getHomes } from './../../ducks/homesReducer'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import HomeCard from './../HomeCard/HomeCard'
import Header from './../Header/Header'
import Footer from './../../components/Footer/Footer'
import thoughtBubble from './thought-bubble.png'
import star from './star.png'
import house from './house.png'
import './UnfilteredHomes.css'
import { CounterButton } from './../StyledComponents/StyledComponents'

class UnfilteredHomes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            guests: 0,
            cost: 0,
            value: 0,
            min: 0,
            max: 1000,
            toggleGuest: false,
            toggleColorGuest: false,
            toggleColorPrice: false,
            togglePrice: false,
            toggleFade: false
        }
    }
    componentDidMount() {
        window.scrollTo(0, 0)
        this.props.getHomes()
        this.props.getHomesAustin()
        this.props.getHomesTopRated()
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

    handleSliderMin = e => {
        this.setState({min: e.target.value})
    }
    
    handleSliderMax = e => {
        this.setState({max: e.target.value})
    }

    render() {
        let homes = this.props.homes.homes.map((home, i) => {
            return (
                <Link to={`/listing/${home.property_id}`} style={       {"textDecoration": "none"}} key={i} className='homecard-container'>
                    <HomeCard key={home.title} home={home}/>
                 </Link>
                )
        })

        let guestFilter = this.props.homes.homes.filter(home => home.guests === this.state.guests)
        
        let displayFilter = guestFilter.map((home, i) => {
            return (
                <Link to={`/listing/${home.property_id}`} style={       {"textDecoration": "none"}} className='homecard-container'>
                    <HomeCard key={home.title} home={home}/>
                 </Link>
                )
        })
        
        let costFilter = this.props.homes.homes.filter(home => home.cost >= this.state.min && home.cost <= this.state.max)
        
        let displayCostFilter = costFilter.map((home, i) => {
            return (
                <Link to={`/listing/${home.property_id}`} style={       {"textDecoration": "none"}} className='homecard-container'>
                    <HomeCard key={home.cost} home={home} />
                 </Link>
                )
        })

        let topRatedHomes = this.props.homes.topRatedHomes.map((home, i) => {
            return (
                <Link to={`/listing/${home.property_id}`} style={   {"textDecoration": "none"}} className='homecard-container'>
                    <HomeCard key={home.property_id} home={home}/>
                </Link>
            )
        })
        
        let homesAustin = this.props.homes.austinHomes.map((home, i) => {
            return (
                <Link to={`/listing/${home.property_id}`} style={       {"textDecoration": "none"}} className='homecard-container'>
                    <HomeCard key={home.title} home={home}/>
                 </Link>
                )
        })

        return (
            <div className='homesBody'>
                <Header/>
                
                <div className="dates-guests-bar">
                    <p className="dates">Dates</p>
                    <p onClick={() => this.setState({
                        toggleGuest: !this.state.toggleGuest,
                        toggleFade: !this.state.toggleFade,
                        toggleColorGuest: true
                        })} className={this.state.toggleColorGuest ? "guest-button" : ""}>Guests</p>
                   
                            <div className={this.state.toggleGuest ? 'guest-drop drop-toggle' : 'guest-drop'}>
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
                                <div className="apply-reset">
                                <h2 onClick={() => this.setState({
                                    toggleGuest: !this.state.toggleGuest,
                                    toggleFade: !this.state.toggleFade
                                    })}>Apply</h2>
                                <h2 onClick={() => this.setState({
                                    toggleGuest: !this.state.toggleGuest,
                                    toggleFade: !this.state.toggleFade,
                                    guests: 0,
                                    toggleColorGuest: false
                                    })}>Reset</h2> 
                                </div>       
                            </div>
                    <p>Home type</p>
                    <p onClick={() => this.setState({
                        togglePrice: !this.state.togglePrice,
                        toggleColorPrice: true,
                        toggleFade: !this.state.toggleFade
                        })} className={this.state.toggleColorPrice ? "price-button" : ""}>Price</p>
                    <div className={this.state.togglePrice ? 'price-drop price-toggle' : 'price-drop'}>

                    <h4>The average nightly price is $81</h4>
                        <div className="price-boxes">
                            <h6>${this.state.min}</h6><h2>-</h2>
                            <h6>${this.state.max}</h6>    
                        </div>
                    <div className="slidercontainer">
                        <input 
                            type="range" 
                            min="0"
                            max="500"
                            value={this.state.min}
                            onChange={this.handleSliderMin}
                            step="1"
                            className="min-slider"
                            />
                        <input 
                            type="range" 
                            min="501"
                            max="1000"
                            value={this.state.max}
                            onChange={this.handleSliderMax}
                            step="1"
                            className="max-slider"
                            />
                    </div>
                     
                    <div className="apply-reset">
                        <h2 onClick={() => this.setState({
                            togglePrice: !this.state.togglePrice,
                            toggleFade: !this.state.toggleFade
                            })}>Apply</h2>
                        <h2 onClick={() => this.setState({
                                        togglePrice: !this.state.togglePrice,
                                        toggleFade: !this.state.toggleFade,
                                        min: 0,
                                        max: 1000,
                                        toggleColorPrice: false
                                        })}>Reset</h2>     
                    </div>    
                    </div>
                    <p>Rooms and Beds</p>
                    <p>Amenities</p>
                    <p>More Filters</p>
                </div>
                <div className={this.state.toggleFade ? "fade" : ""}>

                <h2 className="travel-h2">Travel the world with Airbnb</h2>
                <div className= "travel-world-section">
                    <div className="london">
                        <Link to={`/filteredhomes/26`}>
                            <img src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt=""/>
                            <h4>London</h4>
                            <h6>England</h6>
                        </Link>
                    </div>
                    <div className="new-york">
                        <Link to={`/filteredhomes/65`}>
                            <img src="https://images.unsplash.com/photo-1534430480872-3498386e7856?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt=""/>
                            <h4>New York</h4>
                            <h6>United States</h6>
                        </Link>
                    </div>
                    <div className="bali">
                        <Link to={`/filteredhomes/90`}>
                            <img src="https://images.unsplash.com/photo-1540776398900-46755652c969?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt=""/>
                            <h4>Bali</h4>
                            <h6>Indonesia</h6>
                        </Link>
                    </div>  
                    <div>
                        <Link to={`/filteredhomes/66`} className='travel-world-section-card'>
                            <img src="https://images.unsplash.com/photo-1522735555435-a8fe18da2089?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt=""/>
                            <h4>San Francisco</h4>
                            <h6>United States</h6>
                        </Link>
                    </div>  
                </div>

                <div className={this.state.guests ? "rated-homes-container" : "no-display"}>
                    <h2>Homes Available for {this.state.guests} {this.state.guests === 1 ? "Guest" : "Guests"}</h2>
                    <p>Explore homes verified for quality &amp; comfort in cities around the world</p>
                    <div className="homes-display-container">
                        {displayFilter}
                    </div>      
                </div>
                
                <div className={this.state.min > 0 || this.state.max < 1000 ? "rated-homes-container" : "no-display"}>
                    <h2>Homes Available for ${this.state.min} to ${this.state.max}</h2>
                    <p>Explore homes verified for quality &amp; comfort in cities around the world</p>
                    <div className="homes-display-container">
                        {displayCostFilter}
                    </div>      
                </div>

                <div className={this.state.guests || this.state.min > 0 || this.state.max < 1000 ? "no-display" : "rated-homes-container"}>
                    <h2>Top-rated homes</h2>
                    <p>Explore some of the best-reviewed homes in the world</p>
                    <div className="homes-display-container">
                    {topRatedHomes}
                    </div> 
                </div>

                <h4 className={this.state.guests || this.state.min > 0 || this.state.max < 1000 ? "no-display" : "show-all"}>Show all (2000+) ></h4>

                <div className={this.state.guests || this.state.min > 0 || this.state.max < 1000 ? "no-display" : "traveling-bar-container"}>
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

                <div className={this.state.guests || this.state.min > 0 || this.state.max < 1000 ? "no-display" : "picked-homes-container"}>
                    <h2>Homes in Austin, TX</h2>
                    <div className="homes-display-container">{homesAustin}</div>
                </div>
                
                <div className={this.state.guests || this.state.min > 0 || this.state.max < 1000 ? "no-display" : "picked-homes-container"}>
                    <h2>300+ Homes</h2>
                    <div className="homes-display-container">{homes}</div>
                </div>
                <Footer/>
                </div>
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