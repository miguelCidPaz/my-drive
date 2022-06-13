const getPool = require('../../database/getPool')

const selectAllFoldersByIdUser = async (id_user) => {
    try {
        const pool = getPool();
        const folders = await pool.query('SELECT * FROM folders WHERE id_user = ?', [id_user])
        return folders[0]
    } catch (err) {
        console.log('selectAllFoldersByIdUser');
        console.log(err);
        throw err
    }
}

module.exports = selectAllFoldersByIdUser