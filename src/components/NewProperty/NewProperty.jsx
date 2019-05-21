import React, { Component } from 'react'
import { connect } from 'react-redux' 
import Header from './../Header/Header'
import { createListing } from './../../ducks/homesReducer'
import { PropertyInput, CounterButton, ListingButton, UploadImagesButton } from './../StyledComponents/StyledComponents'
import './NewProperty.css'
import Footer from './../Footer/Footer'
import NewPropConfirm from './../NewPropConfirm/NewPropConfirm'
import Icon from '../StyledComponents/AmenitiesIcons/index'
import UploadedImage from './../UploadedImage/UploadedImage'
import { v4 as randomString } from 'uuid';
import Dropzone from 'react-dropzone';
import axios from 'axios'
import cloud from './icons8-upload-to-cloud-50.png'

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
            image_1: '', 
            image_2: '', 
            image_3: '', 
            image_4: '', 
            image_5: '', 
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
            private_bathroom: false,
            isUploaded: false,
            isUploading: false,
            urls: [],
            submit: false
        }
    }

    getSignedRequest = (files) => {
        this.setState({ isUploading: true });
        for(let i = 0; i < files.length; i++) {
            const fileName = `${randomString()}-${files[i].name.replace(/\s/g, '-')}`;
            axios
            .get('/api/signs3', {
                params: {
                    'file-name': fileName,
                    'file-type': files[i].type,
                },
            })
            .then(response => {
                const { signedRequest, url } = response.data;
                this.uploadFile(files[i], signedRequest, url);
            })
            .catch(err => {
                console.log(err);
            });
        }
        this.setState({ isUploaded: true });
    }
    
      uploadFile = (file, signedRequest, url) => {
        const options = {
          headers: {
            'Content-Type': file.type,
          },
        };
    
        axios
          .put(signedRequest, file, options)
          .then(response => {
            this.setState({ isUploading: false, urls: [...this.state.urls, url] });
            console.log(this.state.urls)
          })
          .catch(err => {
            this.setState({
              isUploading: false,
            });
            if (err.response.status === 403) {
              alert(
                `Your request for a signed URL failed with a status 403. Double check the CORS configuration and bucket policy in the README. You also will want to double check your AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY in your .env and ensure that they are the same as the ones that you created in the IAM dashboard. You may need to generate new keys\n${
                  err.stack
                }`
              );
            } else {
              alert(`ERROR: ${err.status}\n ${err.stack}`);
            }
          });
      };
      

    createListing = async () => {
        let urls = await this.state.urls
        console.log(urls)
        for(let i = 0; i < urls.length; i++) {
            if(urls.length === 5) {
                this.setState({
                    image_1: this.state.urls[4],
                    image_2: this.state.urls[3],
                    image_3: this.state.urls[2],
                    image_4: this.state.urls[1],
                    image_5: this.state.urls[0],
                })
            } else if(urls.length === 4) {
                this.setState({
                    image_1: this.state.urls[3],
                    image_2: this.state.urls[2],
                    image_3: this.state.urls[1],
                    image_4: this.state.urls[0]
                })
            } else if(urls.length === 3) {
                this.setState({
                    image_1: this.state.urls[2],
                    image_2: this.state.urls[1],
                    image_3: this.state.urls[0]
                })
            } else if(urls.length === 2) {
                this.setState({
                    image_1: this.state.urls[1],
                    image_2: this.state.urls[0]
                }) 
            }
             else if(urls.length === 1) {
                this.setState({
                    image_1: this.state.urls[0]
                }) 
            }
        }
        let { city_name, state_name, zipcode_name, street_address, title, cost, description, bed, bath, rooms, guests, image_1, image_2, image_3, image_4, image_5, kitchen, shampoo, heating, air_conditioning,washer, dryer, wifi, breakfast, indoor_fireplace, iron, hair_dryer, laptop_friendly_workspace,
        crib, tv, smoke_dectector, carbon_monoxide_detector, private_bathroom } = this.state;

        createListing(city_name, state_name, zipcode_name, street_address, title, cost, description, bed, bath, rooms, guests, image_1, image_2, image_3, image_4, image_5, kitchen, shampoo, heating,air_conditioning, washer, dryer, wifi, breakfast, indoor_fireplace, iron, hair_dryer, laptop_friendly_workspace, crib, tv, smoke_dectector, carbon_monoxide_detector, private_bathroom);
        
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
        const { urls, url } = this.state;
        let uploadedImages = urls.map(image => {
            return (
                <UploadedImage image={image}/>
            )
        })

        return !this.state.submit ? (
            <div className="new-property-listing">
                <Header />
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
                                <div className="amen-container">
                                    <Icon name="kitchen" style={{width: 15}}/>
                                    <h6>Kitchen</h6>
                                    <input onClick={e => this.handleCheckBox("kitchen", e.target.checked)} type="checkbox" name="amenities"/>
                                </div>

                                <div className="amen-container">
                                    <Icon name="shampoo" width={15} fill="#000" stroke="#000"/>
                                    <h6>Shampoo</h6>
                                    <input onClick={e => this.handleCheckBox("shampoo", e.target.checked)} type="checkbox" name="amenities"/>
                                </div>
                                <div className="amen-container">
                                    <Icon name="heating" width={15} fill="#000" stroke="#000"/>
                                    <h6>Heating</h6>
                                    <input onClick={e => this.handleCheckBox("heating", e.target.checked)} type="checkbox" name="amenities"/>
                                </div>
                                <div className="amen-container">
                                    <Icon name="air_conditioning" width={15} fill="#000" stroke="#000"/>
                                    <h6>Air Conditioning</h6>
                                    <input onClick={e => this.handleCheckBox("air_conditioning", e.target.checked)} type="checkbox" name="amenities"/>
                                </div>
                                <div className="amen-container">
                                    <Icon name="washer" width={15} fill="#000" stroke="#000"/>
                                    <h6>Washer</h6>
                                    <input onClick={e => this.handleCheckBox("washer", e.target.checked)} type="checkbox" name="amenities"/>
                                </div>
                                <div className="amen-container">
                                    <Icon name="dryer" width={15} fill="#000" stroke="#000"/>
                                    <h6>Dryer</h6>
                                    <input onClick={e => this.handleCheckBox("dryer", e.target.checked)} type="checkbox" name="amenities"/>
                                </div>
                                <div className="amen-container">
                                    <Icon name="wifi" width={15} fill="#000" stroke="#000"/>
                                    <h6>Wifi</h6>
                                    <input onClick={e => this.handleCheckBox("wifi", e.target.checked)} type="checkbox" name="amenities"/>
                                </div>
                                <div className="amen-container">
                                    <Icon name="breakfast" width={15} fill="#000" stroke="#000"/>
                                    <h6>Breakfast</h6>
                                    <input onClick={e => this.handleCheckBox("breakfast", e.target.checked)} type="checkbox" name="amenities"/>
                                </div>
                                <div className="amen-container">
                                    <Icon name="indoor_fireplace" width={15} fill="#000" stroke="#000"/>
                                    <h6>Fireplace</h6>
                                    <input onClick={e => this.handleCheckBox("indoor_fireplace", e.target.checked)} type="checkbox" name="amenities"/>
                                </div>
                                <div className="amen-container">
                                    <Icon name="iron" width={15} fill="#000" stroke="#000"/>
                                    <h6>Iron</h6>
                                    <input onClick={e => this.handleCheckBox("iron", e.target.checked)} type="checkbox" name="amenities"/>
                                </div>
                                <div className="amen-container">
                                    <Icon name="hair_dryer" width={15} fill="#000" stroke="#000"/>
                                    <h6>Hairdryer</h6>
                                    <input onClick={e => this.handleCheckBox("hair_dryer", e.target.checked)} type="checkbox" name="amenities"/>
                                </div>
                                <div className="amen-container">
                                    <Icon name="laptop_friendly_workspace" width={15} fill="#000" stroke="#000"/>
                                    <h6>Laptop Friendly</h6>
                                    <input onClick={e => this.handleCheckBox("laptop_friendly_workspace", e.target.checked)} type="checkbox" name="amenities"/>
                                </div>
                                <div className="amen-container">
                                    <Icon name="crib" width={15} fill="#000" stroke="#000"/>
                                    <h6>Crib</h6>
                                    <input onClick={e => this.handleCheckBox("crib", e.target.checked)} type="checkbox" name="amenities"/>
                                </div>
                                <div className="amen-container">
                                 <Icon name="tv" width={15} fill="#000" stroke="#000"/>
                                    <h6>TV</h6>
                                    <input onClick={e => this.handleCheckBox("tv", e.target.checked)} type="checkbox" name="amenities"/>
                                </div>
                                <div className="amen-container">
                                    <Icon name="smoke_detector" width={15} fill="#000" stroke="#000"/>
                                    <h6>Smoke Detector</h6>
                                    <input onClick={e => this.handleCheckBox("smoke_detector", e.target.checked)} type="checkbox" name="amenities"/>
                                </div>
                                <div className="amen-container">
                                    <Icon name="carbon_monoxide_detector" width={15} fill="#000" stroke="#000"/>
                                    <h6>Carbon Monoxide Detector</h6>
                                    <input onClick={e => this.handleCheckBox("carbon_monoxide_detector", e.target.checked)} type="checkbox" name="amenities"/>
                                </div>
                                <div className="amen-container">
                                    <Icon name="private_bathroom" width={15} fill="#000" stroke="#000"/>
                                    <h6>Private Bathroom</h6>
                                    <input onClick={e => this.handleCheckBox("private_bathroom", e.target.checked)}  type="checkbox" name="amenities"/>
                                </div>
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

                            <img src={url} alt="" width="450px" />
                            <h2>Add photos to your listing</h2>

                            <Dropzone
                                onDropAccepted={this.getSignedRequest}
                                style={{
                                    position: 'relative',
                                    width: 200,
                                    height: 200,
                                    borderWidth: 7,
                                    marginTop: 100,
                                    borderColor: 'rgb(102, 102, 102)',
                                    borderStyle: 'dashed',
                                    borderRadius: 5,
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    fontSize: 28,
                                }}
                                accept="image/*"
                                multiple={true}
                                >
                                {({getRootProps, getInputProps}) => (
                                <section>
                                    <div {...getRootProps()}>
                                    <input {...getInputProps()}/>
                                    <div>

                                    
                                    {this.state.isUploaded ? 
                                        <div className="uploaded-images-container">{uploadedImages}
                                        {this.state.urls[0] ? 
                                        <div></div>
                                        : <UploadImagesButton after>Add Another +</UploadImagesButton> 
                                    } 
                                        </div>
                                        :
                                        <div  className="upload-container">
                                            <UploadImagesButton onClick={() => this.setState({upload: !this.state.upload})}><img src={cloud} alt="" width="20" color="#fff"/>Upload Images</UploadImagesButton>    
                                        </div>
                                    }
                                    </div>
                                    </div>
                                </section>
                            )}
                            </Dropzone>    

                            
                            </div>
                            <ListingButton onClick={async () => {
                                await this.createListing();
                                this.setState({submit: true})
                            }}>Create Listing</ListingButton>

                        </div> 
                    </div>
                </div>
                <Footer/>
            </div>
        ) : (

            <NewPropConfirm/>
        )
    }
}

function mapStatetoProps(reduxStoreState) {
    return {
        homes: reduxStoreState.homes
    }
}

export default connect(mapStatetoProps, {createListing})(NewProperty)