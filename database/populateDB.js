const getPool = require('./getPool');
const { v4 } = require('uuid');

const populateDB = async () => {
    const thisDate = new Date().toISOString().slice(0, 19).replace('T', ' ');

    try {
        const pool = getPool();
        console.log('Insertando user de pruebas')
        await pool.query(
            `INSERT INTO users (id, username, password, email, biography, photo, creation_date) VALUES
            ("${v4()}", "miguel", "1234", "miguel.cid@gmail.com", "soy el user de pruebas", "https://i.musicaimg.com/letras/resmax/bob-esponja.jpg", "${thisDate}")`
        );
        console.log('usuario de prueba listo')
    } catch (error) {
        console.log(error)
    }
}

module.exports = populateDB