const getPool = require('../../database/getPool')

const selectFileById = async (id) => {
    try {
        const pool = getPool();
        const file = pool.query('SELECT * FROM files WHERE id = ?', [id])
        return file[0]
    } catch (err) {
        console.log('selectfilebyid');
        console.log(err);
    }
}

module.exports = selectFileById