import axios, { AxiosResponse } from 'axios';
import { IRestaurant } from '../../../src/types';

export const fetchRestaurants = async (page: number): Promise<any[]> => {
  try {
    const response: AxiosResponse<any[]> = await axios.get(`/api/restaurants?page=${page}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching restaurants:', error);
    throw error;
  }
};

export const fetchRandomRestaurants = async (): Promise<IRestaurant[]> => {
  try {
    const response: AxiosResponse<IRestaurant[]> = await axios.get(`/api/restaurants/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching restaurants:', error);
    throw error;
  }
};

export const fetchRestaurant = async (id: string): Promise<IRestaurant | null> => {
  try {
    const response: AxiosResponse<IRestaurant | null> = await axios.get(`/api/restaurants/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching restaurants:', error);
    throw error;
  }
};
