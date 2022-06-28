const { getDataDb } = require("../config/mongodbconnection")

class Comment {
    static comment(){
        let data = getDataDb().collection("Comments")
        return data
    }
    
    // static async getAllComment() {
    //     try {
    //         const data = await this.comment().find({}).toArray()
    //         console.log(data);
    //         return data
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
}

module.exports = Comment