const getPool = require('../../database/getPool');

const insertFile = async ({ id, id_folder, name }) => {
    const thisDate = new Date().toISOString().slice(0, 19).replace('T', ' ');
    try {
        const pool = getPool();

        await pool.query(`INSERT INTO files (id, id_folder, name, creation_date) VALUES(?, ?, ?, ?)`, [id, id_folder, name, thisDate])
    } catch (err) {
        console.log('insertFile')
        console.log(err);
    }

}

module.exports = insertFile