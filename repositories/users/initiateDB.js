const getPool = require('../../database/getPool')

const initiateDB = async () => {
    try {
        const pool = getPool();
        const recount = await pool.query(`SELECT * FROM users`)
        return recount[0]
    } catch (err) {
        console.log('initiateDB');
        console.log(err);
        return null
    }
}

module.exports = initiateDB