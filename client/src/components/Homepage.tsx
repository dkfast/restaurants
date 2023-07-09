import { useEffect, useState } from 'react';
import { fetchRestaurants } from '../api/api';
import { IRestaurant } from '../../../src/types';
import { Link } from 'react-router-dom';

const Homepage: React.FC = () => {
  const [restaurants, setRestaurants] = useState<IRestaurant[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const getRestaurants = async () => {
      try {
        const data = await fetchRestaurants(currentPage);
        setRestaurants(data);
      } catch (error) {
        console.error('Error fetching restaurants:', error);
      }
    };

    getRestaurants();
  }, [currentPage]);

  const handlePageChange = async (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="container max-w-xs md:py-6 pt-6 px-10">
      {restaurants.map((restaurant, index) => (
        <Link to={`/restaurant/${restaurant.restaurant_id}`} key={restaurant.restaurant_id}>
          <div key={restaurant.restaurant_id}>
            <h3>{restaurant.name}</h3>
          </div>
        </Link>
      ))}

      <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
        Previous
      </button>
      <button onClick={() => handlePageChange(currentPage + 1)}>
        Next
      </button>
    </div>
  );
};

export default Homepage;
