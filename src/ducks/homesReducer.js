import axios from 'axios'

const initialState = {
    homes: []
}

const GET_HOMES = 'GET_HOMES'

export function getHomes() {
    let data = axios.get('/api/homes').then(res => res.data)
    return {
        type: GET_HOMES,
        payload: data
    }
}

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case GET_HOMES + '_PENDING':
            return {...state, loading: true}
        case GET_HOMES + '_FULFILLED':
            return {...state, homes: action.payload, loading: false}  
        default:
            return state;     
    }
}