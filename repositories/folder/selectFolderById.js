const getPool = require('../../database/getPool')

const selectFolderById = async (id) => {
    try {
        const pool = getPool();
        const folder = await pool.query('SELECT * FROM folders WHERE id = ?', [id])
        return folder[0]
    } catch (err) {
        console.log('selectFolderById');
        console.log(err);
        throw err
    }
}