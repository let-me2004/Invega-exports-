'use client';

import { useState, useEffect } from 'react';

export interface GeoLocation {
  latitude: number;
  longitude: number;
  country: string;
  city: string;
  loading: boolean;
  error: string | null;
}

const FALLBACK_LOCATION = {
  latitude: 19.076,
  longitude: 72.8777,
  country: 'India',
  city: 'Mumbai',
};

export function useGeoIP(): GeoLocation {
  const [location, setLocation] = useState<GeoLocation>({
    latitude: FALLBACK_LOCATION.latitude,
    longitude: FALLBACK_LOCATION.longitude,
    country: FALLBACK_LOCATION.country,
    city: FALLBACK_LOCATION.city,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await fetch('https://get.geojs.io/v1/ip/geo.json');
        if (!response.ok) {
          throw new Error('Failed to fetch geo location');
        }
        const data = await response.json();
        setLocation({
          latitude: parseFloat(data.latitude),
          longitude: parseFloat(data.longitude),
          country: data.country,
          city: data.city,
          loading: false,
          error: null,
        });
      } catch (error) {
        setLocation({
          ...FALLBACK_LOCATION,
          loading: false,
          error: error instanceof Error ? error.message : 'Unknown error occurred',
        });
      }
    };

    fetchLocation();
  }, []);

  return location;
}
