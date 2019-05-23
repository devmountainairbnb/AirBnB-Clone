import React, { Component } from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { connect } from 'react-redux'
import { getCities } from './../../ducks/homesReducer'

class RecommendedCarousel extends Component {

    componentDidMount() {
        this.props.getCities()
    }

    render() {
        return (
        <Carousel showThumbs={false} showIndicators={false} swipeable={false} dynamicHeight={false} centerMode={true} centerSlidePercentage={25} emulateTouch>
            <div>
                <img src="https://images.unsplash.com/photo-1515823665507-1b98e804640d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                <p className="legend">
                    Legend
                </p>
            </div>
            <div>
                <img src="https://images.unsplash.com/photo-1503891450247-ee5f8ec46dc3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                <p className="legend">
                    Legend
                </p>
            </div>
            <div>
                <img src="https://images.unsplash.com/photo-1481014472607-f71254019973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                <p className="legend">
                    Legend
                </p>
            </div>
            <div>
                <img src="https://images.unsplash.com/photo-1511527661048-7fe73d85e9a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                <p className="legend">
                    Legend
                </p>
            </div>
            <div>
                <img src="https://images.unsplash.com/photo-1520222984843-df35ebc0f24d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                <p className="legend">
                    Legend
                </p>
            </div>
            <div>
                <img src="https://images.unsplash.com/photo-1533609209125-a94e5577125f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                <p className="legend">
                    Legend
                </p>
            </div>
            <div>
                <img src="https://images.unsplash.com/photo-1533609209125-a94e5577125f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                <p className="legend">
                    Legend
                </p>
            </div>
            <div>
                <img src="https://images.unsplash.com/photo-1533609209125-a94e5577125f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                <p className="legend">
                    Legend
                </p>
            </div>
        </Carousel>
        )
    }
}

function mapStatetoProps(reduxStoreState) {
    return {
        homes: reduxStoreState.homes
    }
}

export default connect(mapStatetoProps, { getCities })(RecommendedCarousel)