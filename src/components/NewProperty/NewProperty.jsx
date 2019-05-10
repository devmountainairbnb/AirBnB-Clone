import React, { Component } from 'react'
import Header from './../Header/Header'
import './NewProperty.css'

class NewProperty extends Component {
    constructor(props) {
        super(props);
        this.state= {
            title: '',
            cost: 0,
            description: '',
            bed: 0,
            bath: 0,
            guests: 0
        }
    }
    render() {
        return (
            <div>
                <Header />
                <div className="new-prop-form">
                    <h1>List New Property</h1>
                    <form className="input-form">
                        <input type="text" name="title" placeholder="Title of Listing"/>
                        <textarea type="text" name="description" placeholder="Description"></textarea>

                        <input type="text" name="street" placeholder="Street Address" />
                        
                        <div className="city-state-zip">
                            <input type="text" name="city" placeholder="City" />
                            <input type="text" name="state" placeholder="State" />
                            <input type="text" name="zipcode" placeholder="Zipcode" />
                        </div>

                        <div className="cost-type">
                            <input type="text" name="cost" placeholder="Cost" />
                            <input type="text" name="type" placeholder="Type" />
                        </div>

                        <div className="images-select">
                            Dropzone....s3
                        </div>

                        <div className="amenities">
                            <h6>Kitchen</h6>
                            <input type="checkbox" name="kitchen"/>
                            <h6>Shampoo</h6>
                            <input type="checkbox" name="shampoo"/>
                            <h6>Heating</h6>
                            <input type="checkbox" name="heating"/>
                            <h6>A/C</h6>
                            <input type="checkbox" name="amenities"/>
                            <h6>Washer</h6>
                            <input type="checkbox" name="amenities"/>
                            <h6>Dryer</h6>
                            <input type="checkbox" name="amenities"/>
                            <h6>Wifi</h6>
                            <input type="checkbox" name="amenities"/>
                            <h6>Breakfast</h6>
                            <input type="checkbox" name="amenities"/>
                            <h6>Fireplace</h6>
                            <input type="checkbox" name="amenities"/>
                            <h6>Iron</h6>
                            <input type="checkbox" name="amenities"/>
                            <h6>Hairdryer</h6>
                            <input type="checkbox" name="amenities"/>
                            <h6>Laptop Friendly</h6>
                            <input type="checkbox" name="amenities"/>
                            <h6>Crib</h6>
                            <input type="checkbox" name="amenities"/>
                            <h6>TV</h6>
                            <input type="checkbox" name="amenities"/>
                            <h6>Smoke Detector</h6>
                            <input type="checkbox" name="amenities"/>
                            <h6>Carbon Monoxide Detector</h6>
                            <input type="checkbox" name="amenities"/>
                            <h6>Private Bathroom</h6>
                            <input type="checkbox" name="amenities"/>
                        </div>

                            <div className="bed-bath-guests">
                                <select className="beds">
                                    <option>1 Bed</option>
                                    <option>2 Beds</option>
                                    <option>3 Beds</option>
                                    <option>4 Beds</option>
                                    <option>5 Beds</option>
                                    <option>6 Beds</option>
                                    <option>7 Beds</option>
                                    <option>8 Beds</option>
                                    <option>9 Beds</option>
                                    <option>10 Beds</option>
                                </select>
                                <select className="baths">
                                    <option>1 Bath</option>
                                    <option>2 Baths</option>
                                    <option>3 Baths</option>
                                    <option>4 Baths</option>
                                    <option>5 Baths</option>
                                    <option>6 Baths</option>
                                    <option>7 Baths</option>
                                    <option>8 Baths</option>
                                    <option>9 Baths</option>
                                    <option>10 Baths</option>
                                </select>
                                <select className="guests">
                                    <option>1 Guest</option>
                                    <option>2 Guests</option>
                                    <option>3 Guests</option>
                                    <option>4 Guests</option>
                                    <option>5 Guests</option>
                                    <option>6 Guests</option>
                                    <option>7 Guests</option>
                                    <option>8 Guests</option>
                                    <option>9 Guests</option>
                                    <option>10 Guests</option>
                                </select>
                            </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default NewProperty