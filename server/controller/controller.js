"Use Strict"
const User = require("../model/user")
const Comment = require("../model/comment")
const { readpass } = require("../helper/hashpass")
const {createPayload } = require("../helper/jwt")
const {ObjectId} = require('mongodb')

class Controller {
    static async loginUser(req, res, next) {
        try {
            const {username, password} = req.body
            let message = []
            if (username == "") { message.push("Username is required") }
            if (password == "") { message.push("Password is required") }
            const data = await User.findOne(req.body)
            if (message.length > 0) {
                throw ({ name: "Validation Error", errors: message })
            }
            if (!data) {
                throw ({ name: "Username Or Password Wrong" })
            }
            const checkPass = readpass(req.body.password, data.password)
            if(!checkPass){
                throw ({ name: "Username Or Password Wrong" })
            }
            const access_token = createPayload({
                userId : data.userId,
                email : data.email,
                role : data.role,
            })
            res.status(200).json({
                message : "Login Success",
                access_token
            })
        } catch (error) {
            next(error);
        }
    }

    static async getAllComment(req, res, next) {
        try {
            const data = await User.userAll()
            res.status(200).json(data)
        } catch (error) {
            next(error);
        }
    }
    static async addComment(req, res, next) {
        try {
            const {id} = req.add
            const {comment, tags} = req.body
            if(comment == ""){
                throw({name : "Comment is required"})
            }
            if(tags == ""){
                throw({name : "Tags is required"})
            }
            const data = await Comment.insertComment(id, req.body)
            res.status(200).json({
                message : "Comment Success",
            })
        } catch (error) {
            next(error);
        }
    }

    static async deleteComment(req, res, next) {
        try {
            const { id } = req.params
            const data = await Comment.deleteComment({ _id: ObjectId(id) })
            res.status(200).json({
                message : "Delete Success",
            })
        } catch (error) {
            next(error)
        }
    }
}

module.exports = Controller