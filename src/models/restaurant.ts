import mongoose, { Schema, Document } from 'mongoose';
import { IRestaurant } from '../types';

// Define the schema for the restaurant
const restaurantSchema = new Schema({
  name: { type: String, required: true },
  restaurant_id: { type: String, required: true },
  cuisine: { type: String },
  borough: { type: String },
  address: {
    building: { type: Number },
    street: { type: String },
    zipcode: { type: Number },
    coord: [{ type: Number }],
  }
});

export const Restaurant = mongoose.model<IRestaurant>('Restaurant', restaurantSchema);
