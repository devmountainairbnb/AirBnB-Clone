import React, {Component} from 'react'
import Header from '../Header/Header'
import Lightbox from 'react-image-lightbox'

import './Listing.css'
import 'react-image-lightbox/style.css'
import { connect } from 'net';


const images = [
    '//a0.muscache.com/im/pictures/45604883/54451b1c_original.jpg?aki_policy=xx_large',
    '//a0.muscache.com/im/pictures/28354969/e9a67222_original.jpg?aki_policy=x_large',
    '//a0.muscache.com/im/pictures/28354977/9e281132_original.jpg?aki_policy=x_large',
    '//a0.muscache.com/im/pictures/28354967/da573b37_original.jpg?aki_policy=x_large',
    '//a0.muscache.com/im/pictures/80adcfd9-a821-43ba-9937-211b9f81a3f1.jpg?aki_policy=x_large'
]

class Listing extends Component {
    constructor(props){
        super(props)

        this.state = {
            photoIndex: 0,
            isOpen: false

        }
    }

    render(){
        const {photoIndex, isOpen} = this.state
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
                <div className='listingBody'>
                    <div className='listInfoContainer'>
                        <div className='listingHead'>
                            <div className='propertyTitle'>
                                <h1>{'property.title'}</h1>
                                <br/>
                                <span>{/* 'property.city (joined from address, nested query)' */} City</span>
                            </div>
                            <div className='hostInfo'>
                                <img src='https://placekitten.com/80/80' alt='host'/>
                                <br/>
                                <span>{/* 'host first name' */} Frank</span>
                            </div>
                        </div>
                        <div className='propertyInfo'>
                            <section className='propertyDetails'>
                                <h4>Property Details</h4>
                                <span className='detailSpan'>{/* 'property.guests'*/}# guests</span>
                                <span className='detailSpan'>{/* 'property.rooms' */}# rooms</span>
                                <span className='detailSpan'>{/* 'property.bed' */}# beds</span>
                                <span className='detailSpan'>{/* 'property.bath' */}# baths</span>
                                <hr></hr>
                            </section>
                            <div>
                                {/* On airbnb, this is where other stuff like "Great Location"
                            or "Great Check-in Experience" are listed. */}
                            </div>
                            <section>
                        <p>{/* 'property.description' */}
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident, velit saepe. Adipisci iusto at quia ab consectetur quos nisi quaerat, laborum laboriosam vel repellat magni dignissimos, id suscipit, eius quas.
                         </p>
                                <hr></hr>
                            </section>
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
                                        
                                <hr></hr>
                            </section>
                            <section>
                                <label>
                                    Availability
                                    <div>
                                        Booking calendars here.
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
                            <input type='date' placeholder='Check In'/>
                            <input type='date' placeholder='Check Out'/>
    
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

export default Listing