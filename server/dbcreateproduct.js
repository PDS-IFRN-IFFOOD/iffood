const { Client } = require('pg');

const client = new Client({
    host: 'db',
    user: 'postgres',
    password: 'abcd1234',
    port: 5432,
    database: 'my_database',
});

const createDatabase = async () => {
    try {
        await client.connect();                            // gets connection
        await client.query("INSERT INTO product (product_id, description , price, imagepath, name ) VALUES (DEFAULT,'pon',2,'una','dise') RETURNING *"); // sends queries
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
        console.log('Table created');
    }
});