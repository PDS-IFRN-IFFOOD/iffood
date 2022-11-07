const Pool = require("pg").Pool;

const pool = new Pool({
    user: "ldwamxjx",
    password: "zmaCsUrQ8GHrquyROK8T01gMXxjMcoz5",
    host: "babar.db.elephantsql.com",
    port: 5432,
    database: "ldwamxjx"
});


module.exports = pool;