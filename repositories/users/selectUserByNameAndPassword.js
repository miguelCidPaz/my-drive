const getPool = require('../../database/getPool');

const selectUserByNameAndPassword = async ({ username, password }) => {
    const pool = getPool();

    const [[user]] = await pool.query(`SELECT * FROM users WHERE username = ? AND password = ?`, [username, password]);

    return user
};

module.exports = selectUserByNameAndPassword;