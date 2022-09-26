const ProductModel = require('../models/ProductModel')
const returnAllProducts = async (req, res) => {}

const returnSingleProduct = async (req, res) => {
  console.logI("Shekhar changes");
}

const createProduct = async (req, res) => {
  try {
    const result = await ProductModel.create(req.body)
    res.json(result)
  } catch (err) {
    res.json(err)
  }
}

const updateProduct = async (req, res) => {}
const deleteProduct = async (req, res) => {}

module.exports = {
  returnAllProducts,
  returnSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct,
<<<<<<< HEAD
};
=======
}
>>>>>>> main
