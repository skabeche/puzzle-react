import { useEffect, useState } from 'react'

export function useGetRandomImage() {
  const [images, setImages] = useState({})
  
  useEffect(() => {
    const words = ['music', 'dog', 'food', 'cat']
    const query = words[Math.floor(Math.random() * words.length)]

    fetch(
      `${import.meta.env.VITE_API_BASE_URL}?query=${query}&orientation=landscape&size=large&per_page=20`,
      {
        headers: { 'Authorization': import.meta.env.VITE_API_KEY }
      })
      .then(res => res.json())
      .then(json => {
        setImages(json['photos'])
      });

  }, [])

  if (Object.keys(images).length === 0) {
    return ''
  }

  return { randomImageUrl: images[Math.floor(Math.random() * Object.keys(images).length)]['src']['medium'] };

}