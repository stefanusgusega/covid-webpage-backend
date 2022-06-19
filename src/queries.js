require('dotenv').config()

const pg = require('pg');

// Handle integer value that chanegd to string
pg.types.setTypeParser(pg.types.builtins.INT8, (value) => {
    return parseInt(value);
});
const Pool = pg.Pool

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'coviddatabase',
    password: process.env.DB_PASSWORD,
    port: 5432
})

const getFirstTask = (request, response) => {
    pool.query('SELECT * FROM task_1_1', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const getSecondTask = (request, response) => {
    pool.query('SELECT * FROM task_1_2 ORDER BY age, sex', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const getThirdTask = (request, response) => {
    pool.query('SELECT * FROM task_1_3', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

module.exports = {
    getFirstTask,
    getSecondTask,
    getThirdTask
}