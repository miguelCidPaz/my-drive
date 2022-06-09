const getPool = require('./getPool');

// Nombre, Email, Biografía, Foto, ...
const initDB = async () => {
    try {

        const pool = getPool();
        const comp = await pool.query(`
            CREATE TABLE IF NOT EXISTS users(
                id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
                username VARCHAR(50),
                password VARCHAR(50),
                email VARCHAR(50),
                biography VARCHAR(255),
                photo VARCHAR(255),
                creation_date DATE
            )
        `)
        if (!comp[0].warningStatus) {
            require('./populateDB')();
        }

    } catch (error) {
        console.log(error)
    }
}

module.exports = initDB