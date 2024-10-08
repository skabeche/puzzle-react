import { useEffect, useState } from "react";
import Button from "./Button";
import { useGetRandomImage } from "../hooks/useGetRandomImage";

const levels = [
  {
    label: 'Easy (4 pieces)',
    value: '4',
  },
  {
    label: 'Normal (9 pieces)',
    value: '9',
  },
  {
    label: 'Hard (16 pieces)',
    value: '16',
  },
]

const images = [
  {
    url: '/images/puzzle/skizophonic.jpg',
    alt: 'Picture 1',
  },
  {
    url: '/images/puzzle/led_zeppelin.jpg',
    alt: 'Picture 2',
  },
  {
    url: '/images/puzzle/nirvana.jpg',
    alt: 'Picture 3',
  },
  {
    url: '/images/puzzle/bowie.jpg',
    alt: 'Picture 4',
  },
]

export const PuzzleOptions = ({ options }) => {
  const [difficulty, setDifficulty] = useState(4);
  const [image, setImage] = useState('');
  const { randomImageUrl } = useGetRandomImage();

  const handleDifficulty = (e) => {
    setDifficulty(e.target.value)
  }
  const handleImage = (e) => {
    setImage(e.target.src);
  }

  useEffect(() => {
    options(image, difficulty);

  }, [image, difficulty, options])

  const handleGetRandomImage = async () => {
    setImage(randomImageUrl);
  }

  return (
    <>
      <div className="difficulty flex gap-6">
        {
          levels.map((level) => {
            return <Button className="px-4 py-2 border-2 border-white hover:bg-white hover:text-[#364852] rounded" key={level.value} onClick={handleDifficulty} value={level.value}>
              {level.label}
            </Button>
          })
        }
      </div>
      <div className="images flex gap-6 w-1/2">
        {
          images.map((image) => {
            return <Button className="border-2 border-transparent hover:border-white rounded" key={image.url}>
              <img className="rounded" onClick={handleImage} src={image.url} alt={image.alt} />
            </Button>
          })
        }

        {randomImageUrl && <Button className="border-2 border-transparent hover:border-white rounded" key={image.url}>
          <img className="rounded" onClick={handleImage} src={randomImageUrl} alt="Random picture" />
        </Button>}

        <Button className="px-4 py-2 border-2 border-white hover:bg-white hover:text-[#364852] rounded" onClick={handleGetRandomImage}>
          Get a random image
        </Button>
      </div>
    </>
  )
}
