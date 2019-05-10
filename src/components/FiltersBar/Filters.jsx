import React from 'react'

function Filters(){
    return (
        <div>
            <h1>Listing</h1>
            <span>header</span>
            <div>
                <span>filters</span>
                <label>
                    Dates
                    <select>
                        <option>Start</option>
                        <option>End</option>
                    </select>
                </label>
                <label>
                    Guests
                    <select>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6+</option>
                    </select>
                </label>
                <label>
                    Price
                    <select>
                        <option>price range</option>
                        <option>price range</option>
                        <option>price range</option>
                    </select>
                </label>
                <label>
                    Rooms and Beds
                    <select>
                        <option>bed amount</option>
                        <option>bed amount</option>
                        <option>bed amount</option>
                    </select>
                    <select>
                        <option>bath amount</option>
                        <option>bath amount</option>
                        <option>bath amount</option>
                    </select>
                    <select>
                        <option>rooms</option>
                        <option>rooms</option>
                        <option>rooms</option>
                    </select>
                </label>
                <label>
                    Amenities
                    <input type='checkbox' /> Amenity
                    <input type='checkbox' /> Amenity
                    <input type='checkbox' /> Amenity
                    <input type='checkbox' /> Amenity
                    <input type='checkbox' /> Amenity
                </label>

            </div>

        </div>
    )
}

export default Filters