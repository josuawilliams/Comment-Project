"Use Strict"
const User = require("../model/user")
const Comment = require("../model/comment")
const { readpass } = require("../helper/hashpass")
const {createPayload } = require("../helper/jwt")

class Controller {
    static async loginUser(req, res, next) {
        try {
            const {username, password} = req.body
            let message = []
            if (username == "") { message.push("Username is required") }
            if (password == "") { message.push("Password is required") }
            if (message.length > 0) {
                throw ({ name: "Validation Error", errors: message })
            }
            const data = await User.findOne(req.body)
            const checkPass = readpass(req.body.password, data.password)
            if (!checkPass) {
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
}

module.exports = Controller