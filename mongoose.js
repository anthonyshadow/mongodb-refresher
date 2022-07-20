const mongoose = require("mongoose");

const Product = require("./models/product");

const url =
  "mongodb+srv://anthony:QeAOmiKUj2AEKDvn@cluster0.p3dbegd.mongodb.net/products_test?retryWrites=true&w=majority";

mongoose
  .connect(url)
  .then(() => {
    console.log("connect to database");
  })
  .catch(() => {
    console.log("connection failed");
  });

const createProduct = async (req, res, next) => {
  const createdProduct = new Product({
    name: req.body.name,
    price: req.body.price,
  });
  const result = await createdProduct.save();
  console.log( typeof createdProduct._id) // turns object id into a string 
  res.json(result);
};

const getProducts = async (req, res, next) => {
  const products = await Product.find().exec(); // returns array by default in mongoose
  res.json(products);
};

exports.createProduct = createProduct;
exports.getProducts = getProducts;
