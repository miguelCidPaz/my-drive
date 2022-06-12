const getPool = require('../../database/getPool')

const updateUser = async ({ id, username, password, email, biography, user_active }) => {

    try {
        const pool = getPool();
        await pool.query('UPDATE users SET username = ?, password = ?, email = ?, biography = ?, user_active = ? WHERE id = ?',
            [username, password, email, biography, user_active, id])
    } catch (err) {
        console.log('updateUser');
        console.log(err);
        return false
    }

}

module.exports = updateUser