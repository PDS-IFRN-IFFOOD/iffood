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
        await client.query('CREATE TABLE product( product_id serial NOT NULL, description character varying(255) NOT NULL, price bigint NOT NULL, imagepath character varying(255), name character varying(255) NOT NULL, PRIMARY KEY (product_id) )'); // sends queries
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