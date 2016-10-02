import React from 'react'
import { connect } from 'react-redux'
import { authUser } from '../actions/authed'
 
import Github from '../components/Github'

class LoginContainer extends React.Component {
    onSubmit(event) {
        event.preventDefault()
        this.props.dispatch(authUser({username:this.refs.username.value, password :this.refs.password.value}))   
    }
    
    render() {
        return (
            <div className="login login-with-news-feed bg-white">
                <Github/>
                <div className="login-content">
                    <form  className="margin-bottom-0" onSubmit={this.onSubmit.bind(this)}>
                        <div className="form-group m-b-15">
                            <input type="text" className="form-control input-lg" placeholder="Email Address"  ref='username'/>
                        </div>
                        <div className="form-group m-b-15">
                            <input type="password" className="form-control input-lg" placeholder="Password" ref='password'/>
                        </div>
                        <div className="checkbox m-b-30">
                            <label>
                                <input type="checkbox" /> Remember Me
                            </label>
                        </div>
                        <div className="login-buttons">
                            <button type="submit" className="btn btn-success btn-block btn-lg">Sign me in</button>
                        </div>
                    </form>
                </div>
            </div>
        )
     } 
}

export default connect()(LoginContainer)