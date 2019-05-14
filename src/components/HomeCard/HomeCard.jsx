import React from 'react'
import './HomeCard.css'

export default function HomeCard(props) {
    return (
        <div className="homecard-container">
            <img src={props.home.image_url[0]} alt="home" />
            <h4>{props.home.title[0]}</h4>
            <h5>${props.home.cost[0]} per night</h5>
            <h6>&#9733;&#9733;&#9733;&#9733;&#9733; &#8729; Superhost</h6>
        </div>
    )
}