const Pool = require("pg").Pool;

const pool = new Pool({
    host: 'db',
    user: 'postgres',
    password: 'abcd1234',
    port: 5432,
    database: 'my_database',
});


module.exports = pool;