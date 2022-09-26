const ProductModel = require("../models/ProductModel");
const returnAllProducts = async (req, res) => {
};

const returnSingleProduct = async (req, res) => {
};

const createProduct = async (req, res) => {

};

const updateProduct = async (req, res) => {

};
const deleteProduct = async (req, res) => {
  const { productID } = req.params;
  try {
    const result = await ProductModel.findByIdAndDelete(productID);
    res.json(result);
  } catch (err) {
    res.json(err);
  }

};

module.exports = {
  returnAllProducts,
  returnSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
