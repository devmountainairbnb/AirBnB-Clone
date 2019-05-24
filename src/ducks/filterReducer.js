let initialState = {
    startDate: '',
    endDate: '',
    guests: 0
}

let FILTER_BY_GUEST_AND_DATES = 'FILTER_BY_GUEST_AND_DATES'

export function filterByGuestAndDates(state) {
    return {
        type: FILTER_BY_GUEST_AND_DATES,
        payload: state
    }
}


export default function Reducer(state=initialState, action) {
    switch(action.type) {
        case FILTER_BY_GUEST_AND_DATES:
        return {...state, ...action.payload}
        default: return state
    }
}