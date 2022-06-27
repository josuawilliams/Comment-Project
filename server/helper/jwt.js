const jwt = require('jsonwebtoken');

function createPayload(data) {
    const token = jwt.sign(data, process.env.SECRET);
    return token;
}

function readToken(data) {
    const decoded = jwt.verify(data, process.env.SECRET);
    return decoded;
}

module.exports = {
    createPayload,
    readToken
}

