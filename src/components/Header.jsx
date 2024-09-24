export const Header = ({ children }) => {
  return (
    <header className="h-screen w-screen text-xl text-white bg-[url('/images/header.jpg')] bg-cover">
      <div className="container flex flex-col items-center justify-center gap-8 h-full ">
        {children}
      </div>
    </header>
  )
}