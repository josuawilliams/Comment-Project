const User = require("../model/user")
const Comment = require("../model/comment")
const {ObjectId} = require('mongodb')


async function AuthorizationDelete(req, res, next) {
    try {
        const {id} = req.add
        const commentId = req.params.id
        const check = await Comment.findOne(commentId)
        if (JSON.stringify(check.userId) !== JSON.stringify(id)) {
            throw ({ name:"NOT_ALLOWED"})
        }
        next()
    } catch (error) {
        next(error)

    }
}

module.exports = AuthorizationDelete