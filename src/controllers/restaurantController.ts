import { Request, Response } from 'express';
import { Restaurant } from '../models/restaurant';
import { IRestaurant } from '../types';

export const getRestaurants = async (req: Request, res: Response) => {
  try {
    const page = Number(req.query.page) || 1;
    const pageSize = 10;
    const skip = (page - 1) * pageSize;

    const restaurants = await Restaurant.find().skip(skip).limit(pageSize);

    res.json(restaurants);
  } catch (error) {
    console.error('Error fetching restaurants:', error);
    res.status(500).json({ error: 'Failed to fetch restaurants' });
  }
};

export const getRestaurant = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const restaurant: IRestaurant | null = await Restaurant.findOne({ restaurant_id: id }).lean();

    res.json(restaurant);
  } catch (error) {
    console.error('Error fetching restaurants:', error);
    res.status(500).json({ error: 'Failed to fetch restaurants' });
  }
};

export const getRandomRestaurants = async (req: Request, res: Response) => {
  try {
    const restaurants: IRestaurant[] | null = await Restaurant.aggregate([
      { $sample: { size: 10 } }
    ]);

    res.json(restaurants);
  } catch (error) {
    console.error('Error fetching restaurants:', error);
    res.status(500).json({ error: 'Failed to fetch restaurants' });
  }
};