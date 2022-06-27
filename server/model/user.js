const { ObjectId } = require("mongodb")
const { getDataDb } = require("../config/mongodbconnection")

class User {
    static user() {
        let data = getDataDb().collection("Users")
        return data
    }

    static async findOne(dataLogin) {
        try {;
            const data = await this.user().findOne({
                username: dataLogin.username
            })
            return data
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = User