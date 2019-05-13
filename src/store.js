import { createStore, combineReducers, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import userReducer from './ducks/userReducer'
import homesReducer from './ducks/homesReducer'

const rootReducer = combineReducers({
    user: userReducer,
    homes: homesReducer 
})

export default createStore(rootReducer, applyMiddleware(promiseMiddleware))

// let mapStateToProps = (reduxState) {
//     return {
//         user: reduxState.user
//     }
// }