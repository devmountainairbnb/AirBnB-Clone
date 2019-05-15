import axios from 'axios'

const initialState = {
    details: {},
    urls: ['']

    
}

const GET_LISTING = 'GET_LISTING'

export function getListing(params) {

    let data = axios.get(`/api/listing/${params.property_id}`).then(res => res.data)
    return {
        type: GET_LISTING,
        payload: data
    }
}

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case GET_LISTING + '_PENDING':
            return {...state, loading: true}
        case GET_LISTING + '_FULFILLED':
            return {...state, ...action.payload, loading: false}  
        default:
            return state;     
    }
}