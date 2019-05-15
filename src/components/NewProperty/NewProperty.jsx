import React, { Component } from 'react'
import Header from './../Header/Header'
import './NewProperty.css'

class NewProperty extends Component {
    constructor(props) {
        super(props);
        this.state= {
            city_name: '', 
            state_name: '', 
            zipcode_name: 0,
            street_address: '',
            title: '',
            cost: 0, 
            description: '',
            bed: 0,
            bath: 0,
            rooms: 0,
            guests: 0,
            image_url:'', 
            kitchen: false, 
            shampoo: false, 
            heating: false,
            air_conditioning: false,
            washer: false,
            dryer: false,
            wifi: false,
            breakfast: false,
            indoor_fireplace: false,
            iron: false,
            hair_dryer: false,
            laptop_friendly_workspace: false,
            crib: false,
            tv: false,
            smoke_dectector: false,
            carbon_monoxide_detector: false,
            private_bathroom: false
        }
    }

    handleChange = e => {
        let { name, value } = e.target
        this.setState({
          [name]: value 
        })
      }

      handleCheckBox = (prop, val) => {
        this.setState({
          [prop]: val
        });
      }

    render() {
        return (
            <div>
                <Header />
                <div className="new-prop-form">
                    <h1>List New Property</h1>
                    <form className="input-form">
                        <input onChange={this.handleChange} type="text" name="title" placeholder="Title of Listing"/>
                        <textarea onChange={this.handleChange} type="text" name="description" placeholder="Description"></textarea>

                        <input onChange={this.handleChange} type="text" name="street_address" placeholder="Street Address" />
                        
                        <div className="city-state-zip">
                            <input onChange={this.handleChange} type="text" name="city_name" placeholder="City" />
                            <input onChange={this.handleChange} type="text" name="state_name" placeholder="State" />
                            <input onChange={this.handleChange} type="text" name="zipcode_name" placeholder="Zipcode" />
                        </div>

                        <div className="cost-type">
                            <input onChange={this.handleChange} type="text" name="cost" placeholder="Cost" />
                        </div>

                        <div className="images-select">
                        <input onChange={this.handleChange} type="text" name="image_url" placeholder="image_url" />
                        </div>

                        <div className="amenities">
                            <h6>Kitchen</h6>
                            <input onClick={e => this.handleCheckBox("kitchen", e.target.checked)} type="checkbox" name="amenities"/>
                            <h6>Shampoo</h6>
                            <input onClick={e => this.handleCheckBox("shampoo", e.target.checked)} type="checkbox" name="amenities"/>
                            <h6>Heating</h6>
                            <input onClick={e => this.handleCheckBox("heating", e.target.checked)} type="checkbox" name="amenities"/>
                            <h6>A/C</h6>
                            <input onClick={e => this.handleCheckBox("air_conditioning", e.target.checked)} type="checkbox" name="amenities"/>
                            <h6>Washer</h6>
                            <input onClick={e => this.handleCheckBox("washer", e.target.checked)} type="checkbox" name="amenities"/>
                            <h6>Dryer</h6>
                            <input onClick={e => this.handleCheckBox("dryer", e.target.checked)} type="checkbox" name="amenities"/>
                            <h6>Wifi</h6>
                            <input onClick={e => this.handleCheckBox("wifi", e.target.checked)} type="checkbox" name="amenities"/>
                            <h6>Breakfast</h6>
                            <input onClick={e => this.handleCheckBox("breakfast", e.target.checked)} type="checkbox" name="amenities"/>
                            <h6>Fireplace</h6>
                            <input onClick={e => this.handleCheckBox("indoor_fireplace", e.target.checked)} type="checkbox" name="amenities"/>
                            <h6>Iron</h6>
                            <input onClick={e => this.handleCheckBox("iron", e.target.checked)} type="checkbox" name="amenities"/>
                            <h6>Hairdryer</h6>
                            <input onClick={e => this.handleCheckBox("hair_dryer", e.target.checked)} type="checkbox" name="amenities"/>
                            <h6>Laptop Friendly</h6>
                            <input onClick={e => this.handleCheckBox("laptop_friendly_workspace", e.target.checked)} type="checkbox" name="amenities"/>
                            <h6>Crib</h6>
                            <input onClick={e => this.handleCheckBox("crib", e.target.checked)} type="checkbox" name="amenities"/>
                            <h6>TV</h6>
                            <input onClick={e => this.handleCheckBox("tv", e.target.checked)} type="checkbox" name="amenities"/>
                            <h6>Smoke Detector</h6>
                            <input onClick={e => this.handleCheckBox("smoke_detector", e.target.checked)} type="checkbox" name="amenities"/>
                            <h6>Carbon Monoxide Detector</h6>
                            <input onClick={e => this.handleCheckBox("carbon_monoxide_detector", e.target.checked)} type="checkbox" name="amenities"/>
                            <h6>Private Bathroom</h6>
                            <input onClick={e => this.handleCheckBox("private_bathroom", e.target.checked)}  type="checkbox" name="amenities"/>
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
                                    <option>10+ Beds</option>
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
                                    <option>10+ Baths</option>
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
                                    <option>10+ Guests</option>
                                </select>
                                <select className="rooms">
                                    <option>1 Room</option>
                                    <option>2 Rooms</option>
                                    <option>3 Rooms</option>
                                    <option>4 Rooms</option>
                                    <option>5 Rooms</option>
                                    <option>6 Rooms</option>
                                    <option>7 Rooms</option>
                                    <option>8 Rooms</option>
                                    <option>9 Rooms</option>
                                    <option>10+ Rooms</option>
                                </select>
                            </div>
                    </form>
                    <button>Create Listing</button>
                </div>
            </div>
        )
    }
}

export default NewProperty