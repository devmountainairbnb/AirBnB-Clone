import React, {Component} from 'react'
import Header from '../Header/Header'
import Lightbox from 'react-image-lightbox'
import {getListing} from '../../ducks/listingReducer'
import {updateBookingDates, updateBookingStart, updateBookingEnd} from '../../ducks/bookingReducer'
import Icon from '../StyledComponents/AmenitiesIcons/index'

// import 'react-dates/initialize'
import {DateRangePicker, DayPickerRangeController} from 'react-dates'
// import 'react-dates/lib/css/_datepicker.css'

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


        }
    }
    componentDidMount(){
        window.scrollTo(0, 0)
        this.props.getListing(this.props.match.params)

    }

    handleChange = (value) => {
        this.props.updateBookingDates(value)
    }

    render(){
        const {details, urls} = this.props.listing
        const images = urls


        const {photoIndex, isOpen} = this.state

        function capitalize(str) {
            let arr = str.split('_')
            let capitalized = arr[0].charAt(0).toUpperCase() + arr[0].slice(1)
            arr.splice(0, 1, capitalized)

            return arr.join(' ')
        }

        const imgView = images.map((img, i) => {
            if(i === 0){
                return <div
                    key={i}
                    className='imagePrimary'
                    >
                <img
                    className={this.state.opacity}
                    
                    src={img}
                    alt='property views'
                    onClick={() => this.setState({ photoIndex: i, isOpen: true })}
                    />

                </div>

            } else {
                return <div 
                    key={i}
                    className='imageWrapper'
                    >
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

        // console.log(this.state)

        let bookings = [
            {
                start_date: '2019-05-20',
                end_date: '2019-05-27'
            },
            {
                start_date: '2019-06-05',
                end_date: '2019-06-10'
            },
            {
                start_date: '2019-06-17',
                end_date: '2019-06-18'
            }
        ]


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
                                <hr className='divider'></hr>
                            <section>
                                    <h3>Availability</h3>
                                    <div id="dayPicker">
                                    {/* <DayPickerRangeController
                                        startDate={this.state.startDateControlled || this.state.startDate} 
                                        endDate={this.state.endDateControlled || this.state.endDate} 
                                        onDatesChange={({ startDate, endDate }) => this.setState({ startDateControlled: startDate, endDateControlled: endDate, startDate, endDate })}
                                        focusedInput={this.state.focusedInputControlled || 'startDate'}
                                        onFocusChange={focusedInput => this.setState({focusedInputControlled: focusedInput})}
                                        numberOfMonths={2}
                                        hideKeyboardShortcutsPanel={true}
                                        noBorder={true}
                                        isOutsideRange={function(day){
                                            if(day < moment().subtract(1, 'days')){
                                                return true
                                            }
                                        }}
                                        isDayBlocked={day => bookings.some(day2 => moment(day).isSame(day1, day2))}
                                    
                                        /> */}
                                        

                                    </div>
                            </section>
    
                        </div>
                    </div>
    
                    <br/>
                    <div className='stickyBooking'>
                        <div>
                            <label>
                                <span><span className='cost'><strong>${details.cost}</strong></span> per night</span>
                                <br/>
                                Reviews
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
                                        startDate={this.state.startDate || this.state.startDateControlled} 
                                        startDateId="start_date_id"
                                        endDate={this.state.endDate || this.state.endDateControlled}
                                        endDateId="end_date_id"
                                        onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate, startDateControlled: startDate, endDateControlled: endDate })}
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
                                <label className='bookingLabels'>
                                    <span>Guests</span>
                                    <button></button>
                                </label>
                            <br/>
                            <br/>
                            
                            <button className='request'>Request to Book</button>
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
export default connect(mapState, {getListing, updateBookingDates, updateBookingStart, updateBookingEnd})(Listing)
