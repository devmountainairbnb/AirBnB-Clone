import axios from 'axios'

const initialState = {
    bookings: []   
}

const UPDATE_BOOKING_DATES = 'UPDATE_BOOKING_DATES'
const GRAB_BOOKINGS = 'GRAB_BOOKINGS'

export function updateBooking(booking) {
    const start_date = booking.startDate.toISOString().slice(0,10)
    const end_date = booking.endDate.toISOString().slice(0,10)
    const {guests, property_id} = booking
    const request = {property_id, guests, start_date, end_date}

    let data = axios.post('/api/listing/bookings', {request}).then(res => res.data)


    return {
        type: UPDATE_BOOKING_DATES,
        payload: data
    }
}
export function grabBookings(params){
    let data = axios.get(`/api/listing/bookings/${params.property_id}`).then(res => res.data)
    
    return {
        type: GRAB_BOOKINGS,
        payload: data
    }
}

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case UPDATE_BOOKING_DATES + '_FULFILLED':
            return {...state};
        case GRAB_BOOKINGS + '_FULFILLED':
            return {...state, bookings: [...action.payload]};
        default:
            return state;     
    }
}