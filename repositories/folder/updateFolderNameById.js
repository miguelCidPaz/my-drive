const getPool = require('../../database/getPool')

const updateFolderNameById = async (id, name) => {
    try {
        const pool = getPool();
        await pool.query('UPDATE folders SET name = ? WHERE id = ?', [name, id])
    } catch (err) {
        console.log('updateFolderNameById');
        console.log(err);
        throw err
    }
}

module.exports = updateFolderNameById