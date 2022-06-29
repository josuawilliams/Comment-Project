const { getDataDb } = require("../config/mongodbconnection")
const {ObjectId} = require('mongodb')
class Comment {
    static comment(){
        let data = getDataDb().collection("Comments")
        return data
    }
    
    static async insertComment(id,dataComment) {
        try {
            const data = await this.comment().insertOne({
                userId : id,
                comment : dataComment.comment,
                tags : dataComment.tags
            })
            return data
        } catch (error) {
            console.log(error);
        }
    }

    static async findOne(data) {
        try {
            const dataComment = await this.comment().findOne({
                _id : ObjectId(data)
            })
            return dataComment
        } catch (error) {
            
        }
    }

    static async deleteComment(data) {
        try {
            const dataComment = await this.comment().deleteOne(data)
            return dataComment
        } catch (error) {
            
        }
    }
}

module.exports = Comment