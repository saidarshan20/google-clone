'use client';

import { useEffect, useState } from 'react';

export default function CountryLookup() {
  const [country, setCountry] = useState('United States');

  useEffect(() => {
    const getCountry = async () => {
      try {
        const response = await fetch(
          `https://extreme-ip-lookup.com/json/?key=${process.env.AIzaSyC1iaiEkkLY4On8GXiPefuwlDFeUQVmrFI}`
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setCountry(data.country);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    getCountry();
  }, []);

  return <div>{country}</div>;
}
