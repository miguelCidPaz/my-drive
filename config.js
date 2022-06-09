require('dotenv').config();

module.exports = {
    PORT: process.env.PORT,
    CLAVE_JWT: process.env.CLAVE_JWT,
    DATABASE_NAME: process.env.DATABASE_NAME,
    DATABASE_HOST: process.env.DATABASE_HOST,
    DATABASE_USER: process.env.DATABASE_USER,
    DATABASE_PASS: process.env.DATABASE_PASS,
    DATABASE_PORT: process.env.DATABASE_PORT
}