import { combineReducers } from 'redux'
import authed from './authed'
import { routerReducer as routing } from 'react-router-redux'

const rootReducer = combineReducers({
    authed,
    routing
})

export default rootReducer