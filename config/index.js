require('dotenv').config();

module.exports = {
    port: process.env.PORT || 5000,
    SALT_ROUNDS: process.env.SALT_ROUNDS || 10,
    JWT_SECRET: process.env.JWT_SECRET
}