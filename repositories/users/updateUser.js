const getPool = require('../../database/getPool')

const updateUser = async ({ id, username, password, email, biography }) => {

    try {
        const pool = getPool();
        await pool.query('UPDATE users SET username = ?, password = ?, email = ?, biography = ? WHERE id = ?',
            [username, password, email, biography, id])
    } catch (err) {
        console.log('updateUser');
        console.log(err);
        return false
    }

}

module.exports = updateUser