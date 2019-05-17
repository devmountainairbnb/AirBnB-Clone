import axios from 'axios'

const initialState = {
    user: {},
    first_name: ''
}

let GET_DATA = 'GET_DATA'

export function getData() {
    let data = axios.get('/auth/user-data').then(res => res.data).catch(error => {
        console.log(error)
        return {}
    })
    return {
        type: GET_DATA,
        payload: data
    }
}

export default function reducer(state=initialState, action) {
    switch(action.type) {
        case GET_DATA + '_FULFILLED':
            const { email, user_id, first_name, last_name, phone, profile_pic_url } = action.payload
            return { email, user_id, first_name, last_name, phone, profile_pic_url }
        default: return state
    }
}