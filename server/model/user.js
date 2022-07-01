const { getDataDb } = require("../config/mongodbconnection")
const { ObjectId } = require("mongodb")
const {hashpass} = require("../helper/hashpass")

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
    static async findOneByEmail(dataemail) {
        try {
            const data = await this.user().findOne({
                email: dataemail
            })
            delete data.password
            return data
        } catch (error) {
            console.log(error);
        }
    }
    static async findByUserId(datacheck) {
        try {
            const data = await this.user().findOne({
                _id: ObjectId(datacheck.id)
            })
            delete data.password
            return data
        } catch (error) {
            console.log(error);
        }
    }

    static async insertOne(data) {
        try {
            data.password = hashpass(data.password)
            const register = await this.user().insertOne(data)
        } catch (error) {
            console.log(error);
        }
    }

    static async userAll() {
        try {
            const data = await this.user().aggregate([
                {
                    $lookup :{
                        from : "Comments",
                        localField : "_id",
                        foreignField : "userId",
                        as : "comment"
                    }
                }
            ]).toArray()
            data.map(item => {
                delete item.password
            })
            return data
        } catch (error) {
            console.log(error, "error in userAll");
        }
    }
}

module.exports = User