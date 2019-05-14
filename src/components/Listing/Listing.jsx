import React, {Component} from 'react'
import Header from '../Header/Header'
import Lightbox from 'react-image-lightbox'
import {getListing} from '../../ducks/listingReducer'
import {updateBookingDates, updateBookingStart, updateBookingEnd} from '../../ducks/bookingReducer'
// import Icon from '../StyledComponents/AmenitiesIcons/index'
import amenities from './AmenitiesMapper'


import Calendar from 'react-calendar'

import './Listing.css'
import 'react-image-lightbox/style.css'
import { connect } from 'react-redux';



class Listing extends Component {
    constructor(props){
        super(props)

        this.state = {
            photoIndex: 0,
            isOpen: false,
            startDateOpen: false,
            endDateOpen: false

        }
    }
    componentDidMount(){
        this.props.getListing(this.props.match.params)

    }

    handleChange = (value) => {
        this.props.updateBookingDates(value)
    }

    render(){
        const {details, urls} = this.props.listing
        const images = urls

        console.log(this.props)
        console.log(this.state.startDateOpen)

        const {photoIndex, isOpen} = this.state

        let nextMonth = new Date()
        nextMonth.setMonth(nextMonth.getMonth()+1)




        const imgView = images.map((img, i) => {
            if(i === 0){
                return <div className='imagePrimary'>
                    <img
                    className='listingImg'
                    key={i}
                    src={img}
                    alt='property views'
                    onClick={() => this.setState({ photoIndex: i, isOpen: true })}
                    />
                </div>

            } else {
                return <div className='imageWrapper'>
                    <img
                    className='listingImg'
                    key={i}
                    src={img}
                    alt='property views'
                    onClick={() => this.setState({ photoIndex: i, isOpen: true })}
                    />
                </div>
            }
        })

        return (
            <div>
                <Header />
                <div className='listingImages'>
                    {amenities(details)}
                    {imgView}
                    {isOpen && (
                        <Lightbox
                            mainSrc={images[photoIndex]}
                            nextSrc={images[(photoIndex + 1) % images.length]}
                            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                            onCloseRequest={() => this.setState({ isOpen: false })}
                            onMovePrevRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + images.length - 1) % images.length,
                            })
                            }
                            onMoveNextRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + 1) % images.length,
                            })
                            }
                        />
                    )}
                    
                </div>
            <br/>
                <div className='listingBody'>
                    <div className='listInfoContainer'>
                        <div className='listingHead'>
                            <div className='propertyTitle'>
                                <h1>{details.title}</h1>
                                <span>{details.city_name}</span>
                                <br/>
                                <br/>
                            </div>
                            <div className='hostInfo'>
                                <img src={details.profile_pic_url} alt='host' className='hostProfile'/>
                                <br/>
                                <span>{details.first_name}</span>
                            </div>
                        </div>
                        <div className='propertyInfo'>
                            <section className='propertyDetails'>
                                <h4>Property Details</h4>
                                <span className='detailSpan'>{details.guests} guests</span>
                                <span className='detailSpan'>{details.rooms} rooms</span>
                                <span className='detailSpan'>{details.bed} beds</span>
                                <span className='detailSpan'>{details.bath} baths</span>
                            </section>
                            <br/>
                                <hr></hr>
                            <br/>
                            <div>
                                {/* On airbnb, this is where other stuff like "Great Location"
                            or "Great Check-in Experience" are listed. */}
                            </div>
                            <section>
                        <p>{details.description}</p>
                            <br/>
                                <hr></hr>
                            </section>
                            <br/>
                            <section>
                                Amenities
                                <br/>
                                        <span>Amenity </span>
                                        <span>Amenity </span>
                                        <span>Amenity </span>
                                        <span>Amenity </span>
                                        <span>Amenity </span>
                                        <span>Amenity </span>
    
                                        {/* for(prop in amenity){
                                            if(amenity = true){
                                                return <div>{amenity name}</div>
                                            }
                                        }
                                        
                                    or something like that */}
                                        
                                    <br/>
                                    <br/>
                                <hr></hr>
                            </section>
                                    <br/>
                            <section>
                                <label>
                                    Availability
                                    <br/>
                                    <br/>
                                    <div>
                                        Booking calendars here.
                                        <Calendar selectRange='true' returnValue='range' onChange={(value) => {
                                            this.handleChange(value)}}/>
                                        {/* <Calendar selectRange='true' activeStartDate={nextMonth}/> */}

                                    </div>
                                </label>
                            </section>
    
                        </div>
                    </div>
    
                    <br/>
                    <div className='stickyBooking'>
                        <form>
                            <label>
                                {'$ property.cost per night'}
                                <br/>
                                Reviews
                            </label>
                            <br/>
                            <input type='text' placeholder='Check In' value={this.props.booking.start_date} onFocus={() => this.setState({startDateOpen: true})}/>
                            {this.state.startDateOpen && <Calendar onClickDay={(value) => {
                                    this.props.updateBookingStart(value)
                                    this.setState({startDateOpen: false, endDateOpen: true})
                                    }}/>}
                            <input type='text' disabled placeholder='Check Out' value={this.props.booking.end_date}/>
                            {this.state.endDateOpen && <Calendar onClickDay={(value) => {
                                    this.props.updateBookingEnd(value)
                                    this.setState({endDateOpen: false})
                                    }}/>}
    
                            <br/>
                            <select>
                                <option>Guests</option>
                                <option>Guests</option>
                                <option>Guests</option>
                                <option>Guests</option>
                                <option>Guests</option>
                            </select>
                            <br/>
                            <button>Book</button>
                            
                        </form>
    
                    </div>
                </div>
    
                
    
            </div>
        )
    }
        
    }

const mapState = (reduxState) => {
  return reduxState
}
export default connect(mapState, {getListing, updateBookingDates, updateBookingStart, updateBookingEnd})(Listing)
