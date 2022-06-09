const mysql = require('mysql2/promise');

const {
    DATABASE_HOST,
    DATABASE_PORT,
    DATABASE_USER,
    DATABASE_PASS,
    DATABASE_NAME
} = require('../config');

let pool;

const getPool = () => {
    if (!pool) {
        pool = mysql.createPool({
            host: DATABASE_HOST,
            port: DATABASE_PORT,
            user: DATABASE_USER,
            password: DATABASE_PASS,
            database: DATABASE_NAME,
            timezone: 'Z',
            connectionLimit: 10,
        })
    }
    return pool;
};

module.exports = getPool;