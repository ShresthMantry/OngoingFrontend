import React, { useState, useEffect } from 'react';
import { getAvailableCars } from '../services/car.service';
import { Link } from 'react-router-dom';

function CarList() {
  const [cars, setCars] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchAvailableCars = async () => {
      try {
        const cars = await getAvailableCars();
        setCars(cars);
      } catch (error) {
        setError(error.response.data.error);
      }
    };

    fetchAvailableCars();
  }, []);

  return (
    <div>
      {error && <div>{error}</div>}
      <h2>Available Cars</h2>
      <ul>
        {cars.map((car) => (
          <li key={car.id}>
            <h3>{car.make} {car.model}</h3>
            <p>Year: {car.year}</p>
            <p>Color: {car.color}</p>
            <p>Daily Rate: ${car.dailyRate}</p>
            <Link to={`/rent-car?carId=${car.id}`}>Rent</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CarList;