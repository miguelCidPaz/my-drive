const getPool = require('../../database/getPool')

const insertFolder = async ({ id, id_user, name, location }) => {
    const thisDate = new Date().toISOString().slice(0, 19).replace('T', ' ');
    try {
        const pool = getPool();
        await pool.query(`INSERT INTO folders (id, id_user, name, location, creation_date) VALUES (?, ?, ?, ?, ?)`,
            [id, id_user, name, location, thisDate])
    } catch (err) {
        console.log('insertFolder');
        console.log(err);
    }
}

module.exports = insertFolder