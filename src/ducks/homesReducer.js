import axios from 'axios'

const initialState = {
    homes: [],
    topRatedHomes: [],
    austinHomes: []
}

const GET_HOMES = 'GET_HOMES'
const GET_HOMES_TOP_RATED = 'GET_HOMES_TOP_RATED'
const GET_HOMES_AUSTIN = 'GET_HOMES_AUSTIN'
const CREATE_NEW_HOME = 'CREATE_NEW_HOME'

export function getHomes() {
    let data = axios.get('/api/homes').then(res => res.data)
    return {
        type: GET_HOMES,
        payload: data
    }
}
export function getHomesTopRated() {
    let data = axios.get('/api/topratedhomes').then(res => res.data)
    return {
        type: GET_HOMES_TOP_RATED,
        payload: data
    }
}
export function getHomesAustin() {
    let data = axios.get('/api/austinhomes').then(res => res.data)
    return {
        type: GET_HOMES_AUSTIN,
        payload: data
    }
}

export function createListing(city_name, state_name, zipcode_name, street_address, title, cost, description, bed, bath, rooms, guests, image_1, image_2, image_3, image_4, image_5, kitchen, shampoo, heating,air_conditioning,washer,dryer,wifi, breakfast, indoor_fireplace, iron, hair_dryer, laptop_friendly_workspace,
crib, tv, smoke_dectector, carbon_monoxide_detector, private_bathroom) {
    
    let data = axios.post('/api/createlisting', {city_name, state_name, zipcode_name, street_address, title, cost, description, bed, bath, rooms, guests, image_1, image_2, image_3, image_4, image_5, kitchen, shampoo, heating,air_conditioning,washer,dryer,wifi, breakfast, indoor_fireplace, iron, hair_dryer, laptop_friendly_workspace,crib, tv, smoke_dectector, carbon_monoxide_detector, private_bathroom}).then(res => res.data)
    
    return {
        type: CREATE_NEW_HOME,
        payload: data
    }
}

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case GET_HOMES + '_PENDING':
            return {...state, loading: true}
        case GET_HOMES + '_FULFILLED':
            return {...state, homes: action.payload, loading: false}  
        case GET_HOMES_TOP_RATED + '_PENDING':
            return {...state, loading: true}
        case GET_HOMES_TOP_RATED + '_FULFILLED':
            return {...state, topRatedHomes: action.payload, loading: false}  
        case GET_HOMES_AUSTIN + '_PENDING':
            return {...state, loading: true}
        case GET_HOMES_AUSTIN + '_FULFILLED':
            return {...state, austinHomes: action.payload, loading: false}  
        case CREATE_NEW_HOME + '_FULFILLED':
            return {...state, homes: action.payload}    
        default:
            return state;     
    }
}