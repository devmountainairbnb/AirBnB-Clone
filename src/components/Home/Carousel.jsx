import React, {Component} from 'react'
import {Carousel} from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'


export default class HomeCarousel extends Component{
    render(){
        return(
            <Carousel
                showArrows={false}
                showThumbs={false}
                showIndicators={false}
                interval={5000}
                transitionTime={750}
                infiniteLoop
                autoPlay
                className='carousel-container'>
                    <div>
                        <img src="https://images.unsplash.com/photo-1464851707681-f9d5fdaccea8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2210&q=80" alt=''/>
                        <p className="legend">
                        Legend 
                        </p>
                    </div>
                    <div>
                        <img src="https://images.unsplash.com/photo-1534430480872-3498386e7856?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt=''/>
                        <p className="legend">
                        Legend 
                        </p>
                    </div>
                    <div>
                        <img src="https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt=''/>
                        <p className="legend">
                        Legend 
                        </p>
                    </div>
                    <div>
                        <img src="https://images.unsplash.com/photo-1478562672393-2412e5b9d634?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt=''/>
                        <p className="legend">
                        Legend 
                        </p>
                    </div>
                </Carousel>
        )
    }
}
