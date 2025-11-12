import { useEffect, useState, useCallback } from 'react';

export const useFetchIllustrations = () => {
  const URL_API = `${process.env.VITE_APP_ONRENDER_URI}/api/illustrations`;
  const [illustrations, setIllustrations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true);

      const response = await fetch(URL_API);

      if (response.ok) {
        const data = await response.json();
        setIsLoading(false);
        setIllustrations(data);
      }
    } catch (error) {
      console.error('Error fetching illustrations:', error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return [illustrations, isLoading];
};
