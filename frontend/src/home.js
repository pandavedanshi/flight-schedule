import React, { useState } from 'react';
import axios from 'axios';
import './FlightBooking.css';

function FlightBooking() {
  const [features, setFeatures] = useState([]);
  const [prediction,   
 setPrediction] = useState(null);   

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (event) => {
    const newFeatures = [...features];
    newFeatures[event.target.name] = event.target.value;
    setFeatures(newFeatures);
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post('http://127.0.0.1:5000/predict', features); // Adjust port if needed
      setPrediction(response.data.prediction);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
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
            <input type="text" name="ORIGIN" placeholder="Origin" required="required" />
          </label>
          <label>
            Destination
            <input type="text" name="DEST" placeholder="destination" required="required" />
          </label>
          <label>
          Unique_Carrier
          <input type="text" name="OP_UNIQUE_CARRIER" placeholder="Unique_Carrier" required="required" />
          </label>
          {/* <label>
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
          </label> */}
          {features.map((feature, index) => (
          <input
            key={index}
            type="number"
            name={index}
            placeholder={`Feature ${index + 1}`}
            value={feature}
            onChange={handleInputChange}
          />
        ))}
          <button type="submit" disabled={isLoading}>
          {isLoading ? 'Predicting...' : 'Predict Delay'}
        </button>
        </form>
        <a href="#" className="flight-status-link">Check Flight Status</a>
        {prediction && <p>Predicted Delay: {prediction}</p>}
        {error && <p className="error">Error: {error}</p>}
      </div>
    </div>
  );
}

export default FlightBooking;
