const handleError = (err, req, res, next) => {
    let code = 500
    let message = "Internal Server Error"
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
    if(err.name === 'Comment is required'){
        code = 400
        message = "Comment is required"
    }
    if(err.name === 'Tags is required'){
        code = 400
        message = "Tags is required"
    }
    if(err.name === 'NOT_ALLOWED'){
        code = 403
        message = 'Not Allowed'
    }
    res.status(code).json({
        message
    })
}

module.exports = handleError