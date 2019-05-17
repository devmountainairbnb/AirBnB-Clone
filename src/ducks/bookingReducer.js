const initialState = {
    start_date: '',
    end_date: '',

    
}

const UPDATE_BOOKING_DATES = 'UPDATE_BOOKING_DATES'
const UPDATE_BOOKING_START = 'UPDATE_BOOKING_START'
const UPDATE_BOOKING_END = 'UPDATE_BOOKING_END'

export function updateBookingDates(value) {
    const start_date = value[0].toISOString().slice(0,10)
    const end_date = value[1].toISOString().slice(0,10)
    const dates = {start_date, end_date}
    return {
        type: UPDATE_BOOKING_DATES,
        payload: dates
    }
}
export function updateBookingStart(value) {
    return {
        type: UPDATE_BOOKING_START,
        payload: value
    }
}
export function updateBookingEnd(value) {
    return {
        type: UPDATE_BOOKING_END,
        payload: value
    }
}

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case UPDATE_BOOKING_DATES:
            const {start_date, end_date} = action.payload
            return {...state, start_date, end_date};
        case UPDATE_BOOKING_START:
            // action.payload.toISOString().slice(0,10)
            return {...state, start_date: ((action.payload.getMonth() + 1) + '/' + action.payload.getDate() + '/' + action.payload.getFullYear())}  
        case UPDATE_BOOKING_END:
            action.payload.toISOString().slice(0,10)
            return {...state, end_date: action.payload}  
        default:
            return state;     
    }
}