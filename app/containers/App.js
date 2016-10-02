import React from 'react'

import LoginContainer from '../containers/LoginContainer'
import HomeContainer from './HomeContainer'
import ExceptionComponent from '../components/Exception'

import { Router, Route , Redirect} from 'react-router'

export const requireAuthAndAssessment = (nextState, replace, callback) => {
    fetch('/auth/status',  { credentials: 'same-origin' })
        .then( tresponse => {
            return tresponse.json()
        })
        .then( tjson => {
            if(tjson.isLogin == false) {
                replace('/signin')
            }
            callback()
        })
}

const App = ({history}) => {
    return (
        <Router history={history}>
            <Redirect from="/" to="/main"/>
            <Route path='/signin' component={LoginContainer} />
            <Route path='/main' component={HomeContainer} onEnter={requireAuthAndAssessment} />
            <Route name='404' path='/404' component={ExceptionComponent}/>
            <Redirect from="*" to="404"/>
        </Router>
    )
}

export default App