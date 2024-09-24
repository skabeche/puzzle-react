export const ImageSelect = () => {
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
  return (
    <div className="flex gap-6 w-1/3">
      {
        images.map((image) => {
          return <Button key={image.url}><img className="rounded" src={image.url} alt={image.alt} /></Button>
        })
      }
    </div>
  )
}

const Button = ({ children }) => {
  return (
    <button className="border-2 border-transparent hover:border-white rounded">
      {children}
    </button>
  )
}