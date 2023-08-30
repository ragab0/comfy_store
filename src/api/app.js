const express = require("express");
const app = express();
const port = process.env.API_PORT || 12789;
const {
  getProducts,
  getProduct,
} = require("./controllers/products");


// Parsing incoming json data;
app.use(express.json());


// Setting up the routes and them methods;
app.get("/api/products", getProducts );
app.get("/api/products/:id", getProduct );


// Running the server, the communication;
app.listen(port, function() {
  console.log("Server now is running and listening in:", port);
})