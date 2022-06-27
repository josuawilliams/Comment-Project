const bcrypt = require('bcryptjs');

function hashpass(data) {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(data, salt);
    return hash
}

function readpass(data, hash) {
   return bcrypt.compareSync(data, hash)
}

module.exports = {
    hashpass,
    readpass
}