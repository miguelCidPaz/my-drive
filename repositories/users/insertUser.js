const getPool = require('../../database/getPool');

const insertUser = async ({ id, username, password, email, biography, photo, user_active }) => {
    const thisDate = new Date().toISOString().slice(0, 19).replace('T', ' ');
    try {
        const pool = getPool();
        await pool.query(
            `INSERT INTO users (id, username, password, email, biography, photo, user_active, creation_date) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
            [id, username, password, email, biography, photo, user_active, thisDate]
        );
    } catch (error) {
        console.log('insertUser')
        console.log(error);
    }
};

module.exports = insertUser;
