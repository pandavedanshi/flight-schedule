import React, { useState } from 'react';
import './FlightBooking.css';

function FlightBooking() {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [passengers, setPassengers] = useState('');
  const [departure, setDeparture] = useState('');
  const [arrival, setArrival] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({
      origin,
      destination,
      passengers,
      departure,
      arrival,
    });
  };

  return (
    <div className="flight-booking">
      <div className="form-container">
        <div className="tabs">
          <button className="tab active">My Bookings</button>
          <button className="tab">Flight Status</button>
        </div>
        <form onSubmit={handleSubmit}>
          <h2>Flights</h2>
          <label>
            Origin
            <input
              type="text"
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
              placeholder="Origin"
            />
          </label>
          <label>
            Destination
            <input
              type="text"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              placeholder="Destination"
            />
          </label>
          <label>
            Number of passengers
            <input
              type="number"
              value={passengers}
              onChange={(e) => setPassengers(e.target.value)}
              placeholder="Number of passengers"
            />
          </label>
          <label>
            Departure:
            <input
              type="date"
              value={departure}
              onChange={(e) => setDeparture(e.target.value)}
            />
          </label>
          <label>
            Arrival:
            <input
              type="date"
              value={arrival}
              onChange={(e) => setArrival(e.target.value)}
            />
          </label>
          <button type="submit" className="submit-btn">Submit</button>
        </form>
        <a href="#" className="flight-status-link">Check Flight Status</a>
      </div>
    </div>
  );
}

export default FlightBooking;
