const getPool = require('../../database/getPool')

const deleteFile = async (id_file) => {
    try {
        const pool = getPool();
        await pool.query('DELETE FROM files WHERE id = ?', [id_file])
    } catch (err) {
        console.log('deletefile');
        console.log(err);
        throw err
    }
}

module.exports = deleteFile