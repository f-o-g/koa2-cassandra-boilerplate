import React from 'react'

import { connect } from 'react-redux'
import { checkAuth } from '../actions/authed'

import Github from '../components/Github'

class HomeContainer extends React.Component {
    componentDidMount() {
        if(this.props.route.path != '/404') {
            this.props.dispatch(checkAuth())
        }
    }

    render() {
        return (
            <div>
                <Github/>
                Welcome! You are logged in!
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        main : state.main
    }
}

export default connect(mapStateToProps)(HomeContainer)