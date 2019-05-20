import React, {Component} from 'react'
import Header from '../Header/Header'
import Lightbox from 'react-image-lightbox'
import {getListing} from '../../ducks/listingReducer'
import {updateBookingDates, updateBookingStart, updateBookingEnd} from '../../ducks/bookingReducer'
import Icon from '../StyledComponents/AmenitiesIcons/index'

import 'react-dates/initialize'
import {DateRangePicker, DayPickerRangeController, SingleDatePicker} from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'

import {BookingCardButton} from '../StyledComponents/StyledComponents'

import './Listing.css'
import 'react-image-lightbox/style.css'
import { connect } from 'react-redux';
import { stringLiteral } from '@babel/types';



class Listing extends Component {
    constructor(props){
        super(props)

        this.state = {
            photoIndex: 0,
            isOpen: false,
            opacity: 'listingImg',
            // focusedInput: 'startDate'


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

        let nextMonth = new Date()
        nextMonth.setMonth(nextMonth.getMonth()+1)

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
                    onMouseOver={() => this.setState({opacity: 'listingImgHover'})}
                    onMouseOut={() => (this.setState({opacity: 'listingImg'}))}>
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
                    onMouseOver={() => this.setState({opacity: 'listingImgHover'})}
                    onMouseOut={() => this.setState({opacity: 'listingImg'})}
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


        return (
            <div>
                <Header />
                <div className='listingImages'>
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
                                <h3>Amenities</h3>
                                <br/>
                                <div className='amenityWrapper'>
                                {amenities(details)}
                                </div>
                                        
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
                                    <DayPickerRangeController
                                        startDate={this.state.startDate} 
                                        endDate={this.state.endDate} 
                                        onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })}
                                        focusedInput={this.state.focusedInput}
                                        onFocusChange={focusedInput => this.setState({ focusedInput })}
                                        numberOfMonths={2}
                                        hideKeyboardShortcutsPanel={true}
                                        keepOpenOnDateSelect={true}
                                        />
                                        

                                    </div>
                                </label>
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
                                    <DateRangePicker
                                        startDatePlaceholderText='Check-in'
                                        endDatePlaceholderText='Checkout'
                                        startDate={this.state.startDate} 
                                        startDateId="start_date_id"
                                        endDate={this.state.endDate} 
                                        endDateId="end_date_id"
                                        onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })}
                                        focusedInput={this.state.focusedInput}
                                        onFocusChange={focusedInput => this.setState({ focusedInput })}
                                        numberOfMonths={1}
                                    />
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
