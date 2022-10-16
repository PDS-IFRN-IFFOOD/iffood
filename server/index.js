const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

app.use(cors());
app.use(express.json());

// ROTAS

// Get all products

app.get("/produtos", async (req, res) => {
    try {
      const allProducs = await pool.query("SELECT * FROM product");
      res.json(allProducs.rows);
    } catch (err) {
      console.error(err.message);
    }
  });

// Create product
app.post("/produtos", async (req,res) => {
    try {
        console.log(req.body);
        const Values = Object.values(req.body);
        const newProduct = await pool.query("INSERT INTO product (product_id, description , price, imagepath, name ) VALUES (DEFAULT,$1,$2,$3,$4) RETURNING *", Values);
        res.json(newProduct.rows[0]);
    } catch (error) {
        console.error(error.message);
    }
});

// Get product by ID
app.get("/produtos/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const product = await pool.query("SELECT * FROM product WHERE product_id = $1", [
        id
      ]);
  
      res.json(product.rows[0]);
    } catch (err) {
      console.error(err.message);
    }
  });

// Edit an existing product
app.put("/produtos/:id", async (req,res) => {
    try {
        console.log(req.body);
        let Values = Object.values(req.body);
        Values.push(req.params.id);
        const editProduct = await pool.query("UPDATE product SET description = $1 , price = $2, imagepath = $3, name = $4 WHERE product_id = $5", Values);
        res.json("Updated saquesesafuly");
    } catch (error) {
        console.error(error.message);
    }
});

// Delete a product
app.delete("/produtos/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const deleteProduct = await pool.query("DELETE FROM product WHERE product_id = $1", [
        id
      ]);
      res.json("Prouct was deleted!");
    } catch (err) {
      console.log(err.message);
    }
  });

app.listen(5000,() => {
    console.log("Express running in port 5000");
});