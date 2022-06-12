const getPool = require('../../database/getPool')

const selectUserByName = async (username) => {
    try {
        const pool = getPool();
        const users = await pool.query('SELECT * FROM users WHERE username = ?', [username])
        return users[0].length > 0 ? true : false
    } catch (err) {
        console.log('selectUserByName');
        console.log(err);
        return false
    }
}

module.exports = selectUserByName