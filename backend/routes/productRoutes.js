import express from 'express'
const router =express.Router();
import { getProductById, getProducts } from '../Controller/productController.js'
//description  fetch all products
router.route('/').get(getProducts);
router.route('/:id').get(getProductById);

export default router;