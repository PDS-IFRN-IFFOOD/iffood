CREATE DATABASE filazero;

-- connect to database filazero trough psql `\c` command

CREATE TABLE product(
    product_id serial NOT NULL,
    description character varying(255) NOT NULL,
    price bigint NOT NULL,
    imagepath character varying(255),
    name character varying(255) NOT NULL,
    PRIMARY KEY (product_id)
);


INSERT INTO product (product_id, description , price, imagepath, name ) VALUES ($1,$2,$3,$4);

