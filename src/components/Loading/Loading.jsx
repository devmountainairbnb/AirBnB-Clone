import React from 'react'
import './Loading.css'
import logoAir from './airbnb-teal.svg'

export default function Loading() {
    return (
        <div className="logo-animation">
            <img src={logoAir} alt="" />
        </div>
    )
}