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
    console.log("connection failed")
  });

const createProduct = async (req, res, next) => {
  const createdProduct = new Product({
    name: req.body.name,
    price: req.body.price,
  });
  const result = await createdProduct.save();

  res.json(result);
};

exports.createProduct = createProduct;
