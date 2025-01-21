import {useEffect} from "react";
export const UserProfile = async () => {

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    const apiEndpoint = process.env.VITE_BASE_URL;

    if (!token) {
      setError('User is not authenticated');
      return;
    }

    fetch(apiEndpoint, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })
  }, []);
};
