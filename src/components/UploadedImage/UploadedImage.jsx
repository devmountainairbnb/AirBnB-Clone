import React from 'react'
import './UploadedImage.css'


export default function UploadedImage(props) {
    return (
        <div className="uploaded-image">
            <button className="delete-button"></button>
            <img src={props.image} alt="property"/>
            <p>Add a caption</p>
        </div>
    )
}