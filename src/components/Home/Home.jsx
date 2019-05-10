import React, { Component } from 'react'
import './Home.css'
import chillbus from './backgrounds/chillbus.jpg'

class Home extends Component {
    render() {
        return (
            <div>
                <img className="background-img" src={chillbus} />
                
            </div>
        )
    }
}

export default Home