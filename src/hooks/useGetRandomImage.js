import { useState } from 'react'

export function useGetRandomImage() {
  const [image, setImage] = useState({})
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getRandomImage = async () => {
    const words = ['music', 'dog', 'food', 'cat']
    const query = words[Math.floor(Math.random() * words.length)]
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}?query=${query}&orientation=landscape&size=large&per_page=20`,
        {
          headers: { 'Authorization': import.meta.env.VITE_API_KEY }
        });
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      const data = await response.json();
      // Get one picture randomly.
      setImage(data['photos'][Math.floor(Math.random() * Object.keys(data['photos']).length)])
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { randomImage: image, getRandomImage, loading, error };

}