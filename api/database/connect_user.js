const { Pool } = require("pg");

const db = new Pool({
    connectionString: process.env.DB_URL_USER
})

console.log("DB connection established.")

module.exports = db;