const getPool = require('./getPool');

// Nombre, Email, Biografía, Foto, ...
const initDB = async () => {
    try {

        const pool = getPool();
        const comp = await pool.query(`
            CREATE TABLE IF NOT EXISTS users(
                id VARCHAR(36) NOT NULL,
                username VARCHAR(50),
                password VARCHAR(50),
                email VARCHAR(50),
                biography VARCHAR(255),
                photo VARCHAR(255),
                creation_date DATE,
                PRIMARY KEY (id)
            )
        `)
        await pool.query(`
            CREATE TABLE IF NOT EXISTS folders(
                id VARCHAR(36) NOT NULL,
                iduser VARCHAR(36) NOT NULL,
                name VARCHAR(50),
                location VARCHAR(50),
                PRIMARY KEY (id),
                FOREIGN KEY (iduser) REFERENCES users (id)
            )
        `)
        await pool.query(`
            CREATE TABLE IF NOT EXISTS files(
                id VARCHAR(36) NOT NULL,
                idfolder VARCHAR(36) NOT NULL,
                name VARCHAR(50),
                creation_date DATE,
                PRIMARY KEY (id),
                FOREIGN KEY (idfolder) REFERENCES folders (id)
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