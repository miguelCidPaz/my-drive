const getPool = require('../../database/getPool');

const selectFileByIdFolder = async (id_folder) => {
    try {
        const pool = getPool();
        const files = await pool.query('SELECT * FROM files WHERE id_folder = ?', [id_folder])
        return files[0]
    } catch (err) {
        console.log('selectfilebyidfolder');
        console.log(err);
    }
}

module.exports = selectFileByIdFolder