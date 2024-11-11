export const Header = ({ children }) => {
  return (
    <header id="home" className="h-screen w-screen text-base lg:text-xl text-center text-white bg-[url('/images/header.jpg')] bg-cover">
      <div className="container flex flex-col items-center justify-center gap-8 h-full ">
        {children}
      </div>
    </header>
  )
}