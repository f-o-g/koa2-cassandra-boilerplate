import * as types from '../constants/ActionTypes'
import $ from 'jquery'
import { push } from 'react-router-redux'

import 'whatwg-fetch'

export function checkAuth() {
    return dispatch => {
        fetch('/auth/status',  {
                credentials: 'same-origin'
            })
            .then( tresponse => {
                return tresponse.json()
            })
            .then( tjson => {
                console.log(tjson)
                if(tjson.isLogin == false) {
                    dispatch(push('/signin'))
                }
            })
    }
}

export function authUser(authinfo) {
    return dispatch => {
        $.ajax('/auth/login', {
                type: "POST",
                contentType: "application/json; charset=utf-8",
                data : JSON.stringify(authinfo),
                async : true,
                success: function(data, status, xhr) {
                    if(data.status == 400) {
                        // alert('Login error, username/password is test/test')
                        dispatch({
                            type : types.AUTH_FAILED
                        })
                    } else {
                        dispatch({
                            type : types.AUTH_SUCCESS
                        })
                        dispatch(push('/main'))
                    }
                },
                xhrFields: {
                    withCredentials: true
                },
                crossDomain: true
        })
    }
}


