import { useEffect, useState } from "react";
import Button from "./Button";
import { useGetRandomImage } from "../hooks/useGetRandomImage";
import { Spinner } from "./Spinner";
import { ImageIcon } from "./icons/ImageIcon";

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
  // {
  //   url: '/images/puzzle/nirvana.jpg',
  //   alt: 'Picture 3',
  // },
  {
    url: '/images/puzzle/bowie.jpg',
    alt: 'Picture 4',
  },
]

export const PuzzleOptions = ({ getOptions }) => {
  const [options, setOptions] = useState({ difficulty: 4, image: '' });
  const { randomImage, getRandomImage, loading, error } = useGetRandomImage();
  const showRandomImage = Object.keys(randomImage).length > 0 ? true : false;

  const handleDifficulty = (e) => {
    setOptions({ ...options, difficulty: e.target.value })
  }
  const handleImage = (e) => {
    setOptions({ ...options, image: e.target.value })
  }

  useEffect(() => {
    getOptions(options);
  }, [options])

  return (
    <div className="flex flex-col gap-y-8 items-center">
      <div className="difficulty flex gap-2 md:gap-6">
        {
          levels.map((level) => {
            return <Button className="px-2 md:px-4 py-2 border-2 border-white hover:bg-white hover:text-[#364852] rounded" key={level.value} onClick={handleDifficulty} value={level.value} clickable={true}>
              {level.label}
            </Button>
          })
        }
      </div>
      <div className="images grid grid-cols-2 lg:grid-cols-4 items-end gap-2 md:gap-6 w-[60%] lg:w-1/2">
        {
          images.map((image) => {
            return <Button className="border-2 border-transparent hover:border-white rounded" key={image.url} onClick={handleImage} value={image.url} clickable={true}>
              <img className="rounded" src={image.url} alt={image.alt} />
            </Button>
          })
        }

        {showRandomImage &&
          <Button className="border-2 border-transparent hover:border-white rounded" key={randomImage?.url} onClick={handleImage} value={randomImage?.src?.large} clickable={true}>
            <img className="rounded" src={randomImage?.src?.large} alt={randomImage?.alt} />
          </Button>
        }

        {!showRandomImage &&
          <Button className="flex items-center justify-center w-full h-full p-2 lg:p-4 text-sm border-2 border-white hover:bg-white hover:text-[#364852] rounded" onClick={getRandomImage} disabled={loading}>
            <span className="inline-flex flex-col items-center gap-1">
              {loading ? <Spinner /> : <ImageIcon />}
              Random image
            </span>
          </Button>
        }

      </div>
    </div>
  )
}
