const getPool = require('../../database/getPool')

const updateFile = async (id_folder, id_file) => {
    try {
        const pool = getPool();
        await pool.query('UPDATE files SET id_folder = ? WHERE id = ?', [id_folder, id_file])
    } catch (err) {
        console.log('updatefile');
        console.log(err);
    }
}

module.exports = updateFile