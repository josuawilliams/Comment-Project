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
    static async findByUserId(datacheck) {
        try {
            const data = await this.user().findOne({
                userId: datacheck.userId
            })
            delete data.password
            return data
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
                        localField : "userId",
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