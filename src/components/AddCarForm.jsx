import React, { useState } from 'react';
import { addCar } from '../services/car.service';

function AddCarForm() {
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [color, setColor] = useState('');
  const [dailyRate, setDailyRate] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addCar({ make, model, year, color, dailyRate });
      setError('Car added successfully');
      // Reset form fields
      setMake('');
      setModel('');
      setYear('');
      setColor('');
      setDailyRate('');
    } catch (error) {
      setError(error.response.data.error);
    }
  };

  return (
    <div>
      {error && <div>{error}</div>}
      <h2>Add Car</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Make"
          value={make}
          onChange={(e) => setMake(e.target.value)}
        />
        <input
          type="text"
          placeholder="Model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
        />
        <input
          type="text"
          placeholder="Year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
        <input
          type="text"
          placeholder="Color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <input
          type="number"
          placeholder="Daily Rate"
          value={dailyRate}
          onChange={(e) => setDailyRate(e.target.value)}
        />
        <button type="submit">Add Car</button>
      </form>
    </div>
  );
}

export default AddCarForm;