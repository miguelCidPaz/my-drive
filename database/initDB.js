const initiateDB = require('../repositories/users/initiateDB');
const getPool = require('./getPool');
const populateDB = require('./populateDB')

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
                user_active INTEGER,
                creation_date DATE,
                PRIMARY KEY (id)
            )
        `)
        console.log('Creada Tabla Users...');

        await pool.query(`
            CREATE TABLE IF NOT EXISTS folders(
                id VARCHAR(36) NOT NULL,
                id_user VARCHAR(36) NOT NULL,
                name VARCHAR(50),
                location VARCHAR(50),
                creation_date DATE,
                PRIMARY KEY (id),
                FOREIGN KEY (id_user) REFERENCES users (id)
            )
        `)
        console.log('Creada Tabla folders...');

        await pool.query(`
            CREATE TABLE IF NOT EXISTS files(
                id VARCHAR(36) NOT NULL,
                id_folder VARCHAR(36) NOT NULL,
                name VARCHAR(50),
                creation_date DATE,
                PRIMARY KEY (id),
                FOREIGN KEY (id_folder) REFERENCES folders (id)
            )
        `)
        console.log('Creada Tabla files...');

        const recount = await initiateDB();
        if (recount.length < 1) {
            await populateDB();
        }

    } catch (error) {
        console.log(error)
    }
}

module.exports = initDB