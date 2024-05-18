const mysql = require('mysql2')

// mysql.createPool('mysql://root:root@localhost:3306/db')
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
})

global.db = pool.promise()