export interface IRestaurant {
  restaurant_id: string;
  name: string;
  cuisine: string;
  borough: string;
  address: {
    building: number;
    street: string;
    zipcode: number;
    coord: number[];
  };
};