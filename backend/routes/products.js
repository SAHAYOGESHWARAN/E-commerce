const express = require('express');
const { getAllProducts, getProductById, addProduct } = require('../controllers/productController');
const router = express.Router();

router.get('/', getAllProducts);
router.get('/:id', getProductById);
router.post('/', addProduct);

module.exports = router;
