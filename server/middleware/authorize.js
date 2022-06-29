const User = require("../model/user")
const Comment = require("../model/comment")
const { readToken } = require("../helper/jwt")

async function AuthorizationDelete(req, res, next) {
    try {
        const {id} = req.add
        const commentId = req.params.id
        const check = await Comment.findOne(commentId)
        if (check.userId !== id) {
            throw ({ name:"NOT_ALLOWED"})
        }
        next()
    } catch (error) {
        next(error)

    }
}

module.exports = AuthorizationDelete