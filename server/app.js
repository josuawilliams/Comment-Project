require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
const Controller = require("./controller/controller")
const { connection } = require('./config/mongodbconnection')
const Authentication = require("./middleware/authentication")
const AuthorizationDelete = require("./middleware/authorize")
const handleError = require("./middleware/handleError")

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


app.post('/login', Controller.loginUser)
app.post('/register', Controller.registerUser)
app.use(Authentication)
app.get('/', Controller.getAllComment)
app.post('/post-comment', Controller.addComment)

app.delete('/delete-comment/:id', AuthorizationDelete,  Controller.deleteComment)
app.use(handleError)

connection().then(async (db) => {
    console.log("MongoDb connected");
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`)
    })
})