const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
    async encryptPassword(password) {
        return bcrypt.hashSync(password, 10);
    },

    async checkPassword(encryptedPassword, password) {
        return bcrypt.compare(
            password,
            encryptedPassword
        )
    },

    async createToken(data) {
        return jwt.sign(data, process.env.JWT_SECRET || "Secret");
    },


}