const handleError = (err, req, res, next) => {
    let code = 500
    let message = "Internal Server Error"
    console.log(err);
    if(err.name === 'Username Or Password Wrong'){
        code = 401
        message = 'Username Or Password Wrong'
    }
    if(err.name === 'User Not Found'){
        code = 404
        message = 'User Not Found'
    }
    if(err.name === 'Validation Error'){
        code = 400
        message = err.errors.map((el)=>el).join(", ")
    }
    res.status(code).json({
        message
    })
}

module.exports = handleError