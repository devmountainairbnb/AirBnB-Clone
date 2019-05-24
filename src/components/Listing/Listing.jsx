import React, {Component} from 'react'
import Header from '../Header/Header'
import Lightbox from 'react-image-lightbox'
import {getListing} from '../../ducks/listingReducer'
import {updateBooking, grabBookings} from '../../ducks/bookingReducer'
import Icon from '../StyledComponents/AmenitiesIcons/index'

import {DateRangePicker} from 'react-dates'
import GuestsDropdown from '../StyledComponents/GuestsDropdown'



import './Listing.css'
import 'react-image-lightbox/style.css'

import { connect } from 'react-redux';
const moment = require('moment');

const randomPercent = Math.floor(Math.random() * (100 - 70)) + 70
const randomNum = Math.floor(Math.random() * (20 - 7)) + 7


class Listing extends Component {
    constructor(props){
        super(props)

        this.state = {
            photoIndex: 0,
            isOpen: false,
            opacity: 'listingImg',
            focusedInput: null,
            focusedInputControlled: null,
            guests: 1,
            toggleGuests: false
        }
    }

    componentDidMount(){
        window.scrollTo(0, 0)
        this.props.getListing(this.props.match.params)
        this.props.grabBookings(this.props.match.params)
    }

    handleChange = async () => {
        if(!this.state.startDate || !this.state.endDate || this.state.guests > 1) {
            window.alert('Please fill out Check-in, Checkout, and/or Guests')
        } else {
            const {guests, startDate, endDate} = this.state
            const property_id = this.props.match.params.property_id
            const booking = {guests, property_id, startDate, endDate}
            await this.props.updateBooking(booking)
            window.location.reload()
        }
    }
    handleApply = (guests) => {
        this.setState({guests, toggleGuests: !this.state.toggleGuests})
    }

    render(){
        const {details, urls} = this.props.listing
        const {booking} = this.props
        const {photoIndex, isOpen} = this.state

        const images = urls

        // details ? document.title=`${details.title}` : document.title = 'Airbnb Clone'
        
        function capitalize(str) {
            let arr = str.split('_')
            let capitalized = arr[0].charAt(0).toUpperCase() + arr[0].slice(1)
            arr.splice(0, 1, capitalized)

            return arr.join(' ')
        }

        const imgView = images.map((img, i) => {
            if(i === 0){
                return <div key={i} className='imagePrimary'>
                <img
                    className={this.state.opacity}
                    src={img}
                    alt='property views'
                    onClick={() => this.setState({ photoIndex: i, isOpen: true })}
                    />
                </div>

            } else {
                return <div key={i} className='imageWrapper'>
                <img
                    className={this.state.opacity}
                    src={img}
                    alt='property views'
                    onClick={() => this.setState({ photoIndex: i, isOpen: true })}
                    />
                </div>
            }
        })

        const amenities = (obj) => {
            const keys = Object.keys(obj)
            const values = Object.values(obj)
            const amenities = values.map((value, i) => {
                if(value === true){
                    return <div className='amenityTrue' key={i}>{<Icon name={keys[i]} color='#555' width={20}/>} {capitalize(keys[i])}</div>
                }else if(value === false){
                    return <div className='amenityFalse' key={i}>{<Icon name={keys[i]} color='#DDD' width={20}/>} {capitalize(keys[i])}</div>
                }
            })
            return amenities.filter(item => item !== undefined)
        }
        let bookings = booking.bookings.map((book, i) => {
            return {
                start_date: book.start_date.slice(0, 10),
                end_date: book.end_date.slice(0, 10)
            }
        })


        let isDayBlocked = function() {
                let index = 0
                return {
                    dayCheck: function(day){
                        day.format('YYYY-MM-DD')
                    let booking = bookings[index]
                    if(booking){
                        if(day < booking.start_date){
                            return false
                        }else if(day >= moment(`${booking.start_date}`) && day <= moment(`${booking.end_date}`)){
                            return true
                        }else if(day >= moment(`${booking.end_date}`)){
                                index++
                            return false
                        }
                    } else {
                        return false
                    }
                }
            }
                

        }

        let blocked = isDayBlocked()

        console.log(1111111, this)




        return (
            <div className='listingPage'>
                <Header />
                <div
                    className='listingImages'
                    onMouseOver={() => this.setState({opacity: 'listingImgHover'})}
                    onMouseOut={() => this.setState({opacity: 'listingImg'})}
                    >
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
                                <span className='titleSpan'>{details.title}</span>
                                <br/>
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
                                <span className='detailSubhead'>{<Icon name='home' width={16} color='#484848'/>} <strong>Property details</strong></span>
                                <br/>
                                <div className='detailsContainer'>
                                    <span className='detailSpan'>{details.guests} guests</span>
                                    <span className='detailSpan'>{details.rooms} rooms</span>
                                    <span className='detailSpan'>{details.bed} beds</span>
                                    <span className='detailSpan'>{details.bath} baths</span>
                                </div>   
                                <br/>
                                <div>
                                    <span className='detailSubhead'>{<Icon name='location' width={16} color='#484848'/>} <strong>Great location</strong></span>
                                    <br/>
                                    <span className='detailsContainer'>{randomPercent}% of recent guests gave the location a 5-star rating.</span>
                                </div>
                                <br/>
                                <div>
                                    <span className='detailSubhead'>{<Icon name='spray_bottle' width={16} color='#484848'/>} <strong>Sparkling clean</strong></span>
                                    <br/>
                                    <span className='detailsContainer'>{randomNum} recent guests said this place was sparkling clean.</span>
                                </div>
                            </section>
                                <hr className='divider'></hr>
                            <section>
                                <p>{details.description}</p>
                            </section>
                                <hr className='divider'></hr>
                            <section>
                                <h3>Amenities</h3>
                                <br/>
                                <div className='amenityWrapper'>
                                {amenities(details)}
                                </div>
                                        
                            </section>
                                {/* <hr className='divider'></hr> */}
                                <br/>
                                <br/>
    
                        </div>
                    </div>
    
                    <br/>
                    <div className='stickyBooking'>
                        <div>
                            <label>
                                <span><span className='cost'><strong>${details.cost}</strong></span> per night</span>
                            </label>
                                <br/>
                                <br/>
                                <hr></hr>
                                <br/>
                                <label className='bookingLabels'>
                                    <span>Dates</span>
                                    <br/>
                                    {<DateRangePicker
                                        startDatePlaceholderText='Check-in'
                                        endDatePlaceholderText='Checkout'
                                        startDate={this.state.startDate} 
                                        startDateId="start_date_id"
                                        endDate={this.state.endDate}
                                        endDateId="end_date_id"
                                        onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate})}
                                        focusedInput={this.state.focusedInput}
                                        onFocusChange={focusedInput => this.setState({ focusedInput })}
                                        numberOfMonths={1}
                                        isOutsideRange={function(day){
                                            if(day < moment().subtract(1, 'days')){
                                                return true
                                            }
                                        }}
                                        isDayBlocked={blocked.dayCheck}
                                        
                                        
                                    />}
                                </label>
                                <br/>
                                <label className='bookingLabels'>
                                    <GuestsDropdown
                                        guests={this.state.guests}
                                        handleAddGuests={() => this.handleAddGuests()}
                                        handleSubtractGuests={() => this.handleSubtractGuests()}
                                        handleToggleGuests={() => this.setState({toggleGuests: !this.state.toggleGuests})}
                                        toggleGuests={this.state.toggleGuests}
                                        handleApply={this.handleApply}
                                    
                                    ></GuestsDropdown>
                                </label>
                            <br/>
                            <br/>
                            
                            <button className='request' onClick={this.handleChange}>Request to Book</button>
                        </div>
    
                    </div>
                </div>
    
                
    
            </div>
        )
    }
        
    }

const mapState = (reduxState) => {
  return reduxState
}
export default connect(mapState, {getListing, updateBooking, grabBookings})(Listing)