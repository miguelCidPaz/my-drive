const getPool = require('../../database/getPool');
const { v4 } = require('uuid');

const insertUser = async ({ username, password, email, biography, photo }) => {
    const thisDate = new Date().toISOString().slice(0, 19).replace('T', ' ');
    const pool = getPool();
    const id = v4();

    await pool.query(
        `INSERT INTO users (id, username, password, email, biography, photo, creation_date) VALUES (?, ?, ?, ?, ?, ?, ?)`
        [id, username, password, email, biography, photo, thisDate]
    );

    return id;
};

module.exports = insertUser;
