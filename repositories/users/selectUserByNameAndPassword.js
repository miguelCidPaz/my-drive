const getPool = require('../../database/getPool');

const selectUserByNameAndPassword = async (username, password) => {
    try {
        const pool = getPool();
        const user = await pool.query(`SELECT * FROM users WHERE username = ? AND password = ?`, [username, password]);
        return user[0][0]
    } catch (err) {
        console.log('selectUserByNameAndPassword');
        console.log(err);
        return false
    }

};

module.exports = selectUserByNameAndPassword;