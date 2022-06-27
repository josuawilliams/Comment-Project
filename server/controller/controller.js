"Use Strict"
const User = require("../model/user")
const { readpass } = require("../helper/hashpass")
const {createPayload } = require("../helper/jwt")

class Controller {
    static async loginUser(req, res, next) {
        try {
            const data = await User.findOne(req.body)
            const checkPass = readpass(req.body.password, data.password)
            if (!checkPass) {
                throw ({ name: "Username Or Password Wrong" })
            }
            const access_token = createPayload({
                id : data._id,
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
            console.log("masuk");
        } catch (error) {
            
        }
    }
}

module.exports = Controller