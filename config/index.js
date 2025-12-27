require('dotenv').config();

module.exports = {
    port: process.env.PORT || 5000,
    SALT_ROUNDS: process.env.SALT_ROUNDS || 10,
    JWT_SECRET: process.env.JWT_SECRET || eyJSb2xlIjoiQWRaW4iLCJJc3N1ZXIJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFI6MTc2NTYyNTQ3NCwiaWF0IjoxNzY1NjI1NDc0fQ
}