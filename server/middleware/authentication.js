"use strict";
const User = require("../model/user")
const { readToken } = require("../helper/jwt")

async function Authentication(req, res, next) {
    try {
        const read = readToken(req.headers.access_token) 
        const check = await User.findByUserId(read)
        if(!check){
            throw({name : "User Not Found"})
        }
        req.add = {
            id : check._id,
            email : check.email,
            username : check.username
        }
        next()
    } catch (error) {
        next(error)
    }
}

module.exports = Authentication