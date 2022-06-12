const getPool = require('../../database/getPool')

const deleteFolder = async (id_folder) => {
    try {
        const pool = getPool();
        await pool.query('DELETE FROM folders WHERE id = ?', [id_folder])
    } catch (err) {
        console.log('deletefolder');
        console.log(err);
        throw err
    }
}

module.exports = deleteFolder