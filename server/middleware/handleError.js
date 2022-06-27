const handleError = (err, req, res, next) => {
    let code = 500
    let message = "Internal Server Error"
    console.log(err);
    if(err.name === 'Username Or Password Wrong'){
        code = 401
        message = 'Username Or Password Wrong'
    }
    res.status(code).json({
        message
    })
}

module.exports = handleError