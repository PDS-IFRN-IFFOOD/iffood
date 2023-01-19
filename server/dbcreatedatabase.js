const { Client } = require('pg');

const client = new Client({
    host: 'db',
    user: 'postgres',
    password: 'abcd1234',
    port: 5432,
});


const createDatabase = async () => {
    try {
        await client.connect();                            // gets connection
        await client.query('CREATE DATABASE my_database'); // sends queries
        return true;
    } catch (error) {
        console.error(error.stack);
        return false;
    } finally {
        await client.end();                                // closes connection
    }
};

createDatabase().then((result) => {
    if (result) {
        console.log('Database created');
    }
});