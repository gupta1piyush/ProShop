import express from 'express'
const router =express.Router();
import { authUser, getUserProfile } from '../Controller/userController.js'
import {protect} from '../middleware/authMiddleware.js';
//description  fetch all products

router.post('/login',authUser);
router.route('/profile').get(protect,getUserProfile)

export default router;