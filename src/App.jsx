import React, { createContext } from 'react';
import { useState, useEffect } from 'react';
import Input from './components/input/input';
import Submit from './components/button/submit';
import options from './constants/options';
import FlightInfo from './components/flightinfo/flight-info';

export const AppContext = createContext();

export default function App() {
  const [departure, setDeparture] = useState('');
  const [arrival, setArrival] = useState('');
  const [routeData, setRouteData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, [routeData]);

  const handleDepartureInput = (e) => {
    setDeparture(e.target.value);
  };
  const handleArrivalInput = (e) => {
    setArrival(e.target.value);
  };

  const handleSubmit = (e) => {
    fetch(
      `https://aerodatabox.p.rapidapi.com/airports/icao/${departure}/distance-time/${arrival}`,
      options
    )
      .then((response) => response.json())
      .then((response) => setRouteData(response))
      .catch((err) => console.error(err));
    setLoading(true);
  };
  return (
    <AppContext.Provider value={{ routeData, loading }}>
      <div className='App'>
        <h1> Get Flight Route Data </h1>
        <Input
          handleArrival={handleArrivalInput}
          handleDeparture={handleDepartureInput}
        />
        <Submit onSubmit={handleSubmit} />
        <FlightInfo
          departure={departure}
          arrival={arrival}
          routeData={routeData}
          loading={loading}
        />
      </div>
    </AppContext.Provider>
  );
}
