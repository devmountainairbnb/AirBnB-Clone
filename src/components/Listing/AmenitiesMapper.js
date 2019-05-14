import React from 'react'
import Icon from '../StyledComponents/AmenitiesIcons/index'



export default function amenities(arr){

    let amenities = arr.map((amenity, i) => {
        if((Object.keys(amenity)[0]) === true){
            return <div>{<Icon name={Object.keys(amenity)[0]} fill='#333' stroke='#333'/>}</div>
        } else if((Object.keys(amenity)[0]) === false){
            return <div>{<Icon name={Object.keys(amenity)[0]} fill='#CCC' stroke='#CCC'/>}</div>
        } else {
            return
        }
    })
    return amenities
}

