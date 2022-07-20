const MongoClient = require('mongodb').MongoClient;

const url =
  'mongodb+srv://anthony:QeAOmiKUj2AEKDvn@cluster0.p3dbegd.mongodb.net/?retryWrites=true&w=majority'

const createProduct = async (req, res, next) => {
  const newProduct = {
    name: req.body.name,
    price: req.body.price
  };
  const client = new MongoClient(url);

  try {
    await client.connect();
    const db = client.db("products_test");
    const result = db.collection('products').insertOne(newProduct);
  } catch (error) {
    return res.json({message: 'Could not store data.'});
  };
  client.close();

  res.json(newProduct);
};

const getProducts = async (req, res, next) => {};

exports.createProduct = createProduct;
exports.getProducts = getProducts;
