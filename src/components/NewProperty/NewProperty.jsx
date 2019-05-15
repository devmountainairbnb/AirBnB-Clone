import React, { Component } from 'react'
import { connect } from 'react-redux' 
import HeaderLoggedIn from './../Header/HeaderLoggedIn'
import { createListing } from './../../ducks/homesReducer'
import { PropertyInput, CounterButton, ListingButton } from './../StyledComponents/StyledComponents'
import './NewProperty.css'
import Footer from './../Footer/Footer'


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
            image_url: '', 
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

    createListing = () => {
        let { city_name, state_name, zipcode_name, street_address, title, cost, description, bed, bath, rooms, guests, image_url, kitchen, shampoo, heating,air_conditioning,washer,dryer,wifi, breakfast, indoor_fireplace, iron, hair_dryer, laptop_friendly_workspace,
        crib, tv, smoke_dectector, carbon_monoxide_detector, private_bathroom } = this.state;

        createListing(city_name, state_name, zipcode_name, street_address, title, cost, description, bed, bath, rooms, guests, image_url, kitchen, shampoo, heating,air_conditioning,washer,dryer,wifi, breakfast, indoor_fireplace, iron, hair_dryer, laptop_friendly_workspace,
        crib, tv, smoke_dectector, carbon_monoxide_detector, private_bathroom);

        this.setState({
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
            })
    }

    handleChange = e => {
        let { name, value } = e.target
        this.setState({
          [name]: value 
        })
      }

    handleCheckBox(prop, val) {
        this.setState({
          [prop]: val
        });
    }

    handleDropDown(prop, val) {
        this.setState({
            [prop]: +val
        })
    }

    handleSubtractBed = () => {
        if(this.state.bed >= 1) {
            this.setState({
                bed: this.state.bed - 1
            })
        }
        else {
            this.setState({
                bed: 0
            })
        }
    }
    handleAddBed = () => {
        this.setState({
            bed: this.state.bed + 1
        })
    }
    handleSubtractBath = () => {
        if(this.state.bath >= 1) {
            this.setState({
                bath: this.state.bath - 1
            })
        }
        else {
            this.setState({
                bath: 0
            })
        }
    }
    handleAddBath = () => {
        this.setState({
            bath: this.state.bath + 1
        })
    }

    

    render() {
        return (
            <div className="new-property-listing">
                <HeaderLoggedIn />
                <h1>Let's get started listing your space.</h1>
                
                <div className="main-body-property">
                    <div className="left-side">
                        <div className="step-one">
                            <h6>STEP 1</h6>
                            <h2>What kind of place do you<br/>have?</h2>

                            <div className="rooms-guests">
                                <select onChange={e => this.handleDropDown("rooms", e.target.value)} className="rooms">
                                    <option value="">Select Rooms</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                    <option>7</option>
                                    <option>8</option>
                                    <option>9</option>
                                    <option>10</option>
                                </select>

                                <select onChange={e => this.handleDropDown("guests", e.target.value)} className="guests">
                                    <option value="">Select Guests</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                    <option>7</option>
                                    <option>8</option>
                                    <option>9</option>
                                    <option>10</option>
                                </select>
                            </div>

                                <div className="location">
                                    <PropertyInput onChange={this.handleChange} type="text" name="street_address" placeholder="Street Address" />
                                    <PropertyInput onChange={this.handleChange} type="text" name="city_name" placeholder="City" />
                                    <div>
                                        <PropertyInput short onChange={this.handleChange} type="text" name="state_name" placeholder="State" />
                                        <PropertyInput short onChange={this.handleChange} type="text" name="zipcode_name" placeholder="Zipcode" />
                                    </div>
                                </div>   
                        </div>


                        <div className="step-three">
                            <h6>STEP 3</h6>
                            <h2>Which amenities do you offer?</h2>
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
                        </div>
                        
                    </div>
                    <div className="right-side">

                    <div className="step-two">
                            <h6>STEP 2</h6>
                                    <h2>How many beds and bathrooms can guests use?</h2>
                                <div className="beds-counter">
                                    <h3>Beds</h3>
                                    <div className="buttons-counter">
                                        <CounterButton onClick={this.handleSubtractBed}>-</CounterButton>{this.state.bed}<CounterButton onClick={this.handleAddBed}>+</CounterButton>
                                    </div>
                                </div>
                                <div className="baths-counter">
                                    <h3>Bathrooms</h3>
                                    <div className="buttons-counter">
                                        <CounterButton onClick={this.handleSubtractBath}>-</CounterButton>{this.state.bath}<CounterButton onClick={this.handleAddBath}>+</CounterButton>
                                    </div>
                                </div>
                        </div>

                        <div className="step-four">
                            <h6>STEP 4</h6>
                            <h2>Now let’s get some details about your place so you can publish your listing.</h2>
                            <PropertyInput onChange={this.handleChange} type="text" name="title" placeholder="Title of Listing"/>
                            <textarea onChange={this.handleChange} type="text" name="description" placeholder="Description"></textarea>

                            <div className="cost-type">
                                <PropertyInput short onChange={this.handleChange} type="text" name="cost" placeholder="Cost" />
                            </div>

                            <div className="images-select">
                            <PropertyInput onChange={this.handleChange} type="text" name="image_url" placeholder="image_url" />
                        

                            
                            </div>
                            <ListingButton onClick={() => this.createListing()}>Create Listing</ListingButton>

                        </div> 
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

function mapStatetoProps(reduxStoreState) {
    return {
        homes: reduxStoreState.homes
    }
}

export default connect(mapStatetoProps, {createListing})(NewProperty)