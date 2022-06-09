const getPool = require('./getPool');

const populateDB = async () => {
    try {
        const pool = getPool();
        console.log('Insertando user de pruebas')
        await pool.query(
            `INSERT INTO users (name, password, email, biography, photo, datebirth) VALUES
            ("miguel", "1234", "miguel.cid@gmail.com", "soy el user de pruebas", "https://i.musicaimg.com/letras/resmax/bob-esponja.jpg", "1993-11-01 00:00:00")`
        );
        console.log('usuario de prueba listo')
    } catch (error) {
        console.log(error)
    }
}

module.exports = populateDB