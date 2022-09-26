const express = require("express");
const {
  returnAllProducts,
  returnSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct
} = require("../controllers/productController");
const router = express.Router();

//Creating APIs
router.get("/", returnAllProducts);
//Get single product data using route parameters
router.get("/:productID", returnSingleProduct);

router.post('/', createProduct);
router.patch('/:productID', updateProduct);
router.delete('/:productID', deleteProduct);


module.exports = router;
