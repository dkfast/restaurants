import { useEffect, useState } from 'react';
import { useParams, redirect } from 'react-router-dom';
import { fetchRestaurant } from '../api/api';
import { IRestaurant } from '../../../src/types';

const SingleMovie: React.FC = () => {
  const { id } = useParams<{ id?: string }>(); // Access the movie ID from the URL params
  const [restaurant, setRestaurant] = useState<IRestaurant | null>(null);

  useEffect(() => {
    const fetchRestaurantDetails = async () => {
      try {
        if (!id) {
          return redirect('/');
        }
        const restaurantData: IRestaurant | null = await fetchRestaurant(id);
        setRestaurant(restaurantData);
        console.log(restaurantData)
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchRestaurantDetails();
  }, [id]);

  if (restaurant === null) {
    return <div>Loading...</div>; // Show a loading state while fetching the movie details
  }

  return (
    <div className="container mx-auto py-8 px-10">
      <p>Cast: {restaurant.name}</p>
    </div>
  );
};

export default SingleMovie;
