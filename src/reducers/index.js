import { combineReducers } from 'redux'
import GifsReducer from './gifs'

// Use Redux' combineReducers to create a single object that contains a bunch of reducers
// gifs, the key of the object, is the name of the state and the value is what is being returned by the reducer
const rootReducer = combineReducers({
    gifs: GifsReducer
})

export default rootReducer
