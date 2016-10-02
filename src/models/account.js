'use strict'

import db from '../lib/cassandra'
import log4js from 'log4js'
import bcrypt from 'bcryptjs'
import uuid from 'uuid'
const Account = {}
const LOG = log4js.getLogger('file')
const SALT = bcrypt.genSaltSync(10)

Account.findOne = function (username) {
    return new Promise((resolve, reject) => {
        db.execute(`SELECT first_name, last_name FROM user WHERE first_name = '${username}'`, function (err, result) {
            if (!err) {
                if (result.rows.length > 0) {
                    var user = result.rows[0]
                    resolve({
                        first_name: user.first_name,
                        last_name: user.last_name
                    })
                } else {
                    resolve()
                }
            }
            resolve()
        })
    })
}

Account.verify = function(username, password) {
    return new Promise((resolve, reject) => {
        db.execute(`SELECT first_name, last_name FROM user WHERE first_name = '${username}'`, function (err, result) {
            if (!err){
                if ( result.rows.length > 0 ) {
                    var user = result.rows[0]
                    resolve({
                        first_name: user.first_name,
                        last_name: user.last_name
                    })
                } else {
                    resolve()
                }
                return
            }
            resolve()
        })
    })
}

Account.insert = function(user) {
    const { first_name, last_name } = user
    const password = bcrypt.hashSync(user.password, SALT)
    return new Promise((resolve, reject) => {
        db.execute(`INSERT INTO user (id, first_name, last_name, password) VALUES (${uuid.v4()}, '${first_name}', '${last_name}', '${password}')`, function (err, result) {
            if(err) {
                console.log(err)
                return resolve()
            }
            return resolve()
        })
    })
}

export default Account