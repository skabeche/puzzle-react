export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white text-center py-8">
      <div className="container">
        <p>&copy; {currentYear} Dan Alcaide <a href="http://www.danalcaide.com">www.danalcaide.com</a></p>
        <p><a href="https://github.com/skabeche/puzzle-react">Code on Github</a></p>
      </div>
    </footer>
  )
}
