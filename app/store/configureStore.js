import { createStore, compose, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from '../reducers'
import createLogger from 'redux-logger'
import { routerMiddleware } from 'react-router-redux'
import { browserHistory } from 'react-router'
const reduxRouterMiddleware = routerMiddleware(browserHistory)

const middlewares = [thunkMiddleware, reduxRouterMiddleware]

if (process.env.NODE_ENV === `development`) {
  middlewares.push(createLogger())
}

const createStoreWithMiddleware = compose(
    applyMiddleware(...middlewares),
    window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore)

export default function configureStore(preloadedState) {
    return createStoreWithMiddleware(rootReducer, preloadedState)
}