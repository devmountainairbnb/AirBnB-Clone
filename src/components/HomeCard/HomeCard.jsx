import React from 'react'
import './HomeCard.css'

export default function HomeCard(props) {
    return (
        <div>
            <img src={props.home.img_url} alt="home" />
            <h4>{props.home.title}</h4>
            <h5>${props.home.cost} per night</h5>
            <h6><span style={{color: "#00797E"}}>&#9733;&#9733;&#9733;&#9733;&#9733;</span> &#8729; Superhost</h6>
        </div>
    )
}