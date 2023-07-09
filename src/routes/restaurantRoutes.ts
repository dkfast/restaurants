import express from 'express';
import { getRestaurant, getRestaurants, getRandomRestaurants } from '../controllers/restaurantController';

const router = express.Router();

router.get('/', getRestaurants);
router.get('/:id', getRestaurant);

export default router;
