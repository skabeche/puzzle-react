export const Difficulty = () => {
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
  return (
    <div className="flex gap-6">
      {
        levels.map((level) => {
          return <Button key={level.value}>{level.label}</Button>
        })
      }
    </div>
  )
}

const Button = ({ children }) => {
  return (
    <button className="px-4 py-2 border-2 border-white hover:bg-white hover:text-[#364852] rounded">
      {children}
    </button>
  )
}
