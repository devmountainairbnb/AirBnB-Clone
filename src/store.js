import { createStore, combineReducers, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import userReducer from './ducks/userReducer'
import homesReducer from './ducks/homesReducer'
import listingReducer from './ducks/listingReducer'
import bookingReducer from './ducks/bookingReducer'
import filterReducer from './ducks/filterReducer'

const rootReducer = combineReducers({
    user: userReducer,
    homes: homesReducer ,
    listing: listingReducer,
    booking: bookingReducer,
    filtered: filterReducer
})

export default createStore(rootReducer, applyMiddleware(promiseMiddleware))