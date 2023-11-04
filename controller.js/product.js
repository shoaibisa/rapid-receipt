const Product = require("../models/product");
const Bill = require("../models/bill");

exports.getProductById = async (req, res) => {
  const pid = req.params.pid;
  console.log(pid);
  const product = await Product.findOne({ pid: pid });
  return res.status(200).send({
    iserror: false,
    message: "Success",
    product: product,
  });
};

exports.createBill = async (req, res) => {
  const products = req.body.products;
  console.log(req.body);

  var totalPrice = 0;
  for (var p = 0; p < products.length; p++) {
    const product = await Product.findById(products[p]);
    totalPrice = totalPrice + product.price;
  }

  const bill = new Bill({
    products: products,
    totalPrice: totalPrice,
  });
  await bill.save();

  return res.status(200).send({
    iserror: false,
    message: "Success",
    bill: bill._id,
  });
};

exports.getBill = async (req, res) => {
  const id = req.params.id;
  const bill = await Bill.findById(req.body.id).populate("products");
  return res.status(200).send({
    iserror: false,
    message: "Success",
    bill: bill,
  });
};

exports.hello = async (req, res) => {
  return res.status(200).send({
    iserror: false,
    message: "Success",
  });
};
