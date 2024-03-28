import React, { useState } from 'react';
import { rentCar, makePayment } from '../services/rental.service';
import { useLocation } from 'react-router-dom';

function RentCarForm() {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');
    const [error, setError] = useState('');
    const location = useLocation();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const carId = new URLSearchParams(location.search).get('carId');
        try {
            const rental = await rentCar({ carId, startDate, endDate });
            await makePayment({ rentalId: rental.id, paymentMethod });
            setError('Car rented successfully');
            // Reset form fields
            setStartDate('');
            setEndDate('');
            setPaymentMethod('');
        } catch (error) {
            setError(error.response.data.error);
        }
    };

    return (
        <div>
            {error && <div>{error}</div>}
            <h2>Rent Car</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="date"
                    placeholder="Start Date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                />
                <input
                    type="date"
                    placeholder="End Date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Payment Method"
                    value={paymentMethod}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <button type="submit">Rent Car</button>
            </form>
        </div>
    );
}

export default RentCarForm;