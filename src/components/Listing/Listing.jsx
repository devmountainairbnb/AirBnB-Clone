import React from 'react'

import './Listing.css'

function Listing(){
    return (
        <div>
            <span>header</span>
            <br/>
            <br/>
            <br/>
            <br/>
            <div className='listingImages'>
                {'images'}
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

export default Listing