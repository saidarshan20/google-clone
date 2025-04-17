'use client';

import { useEffect, useState } from 'react';

export default function CountryLookup() {
  const [country, setCountry] = useState('United States');

  useEffect(() => {
    const getCountry = async () => {
      try {
        const response = await fetch(
          `https://extreme-ip-lookup.com/json/?key=${process.env.NEXT_PUBLIC_IP_LOOKUP_KEY}`
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
