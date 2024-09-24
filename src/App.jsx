// import { useState } from 'react'
import { Header } from "./components/Header"
import { Logo } from "./components/Logo"
import { Difficulty } from "./components/Difficulty"
import { ImageSelect } from "./components/ImageSelect"
import { Nav } from "./components/Nav"
import { Footer } from "./components/Footer"

function App() {

  return (
    <>
      <Header>
        <Logo />
        <p>Puzzles are fun ways to pass the time that also provide a challenge for our brains. Choose the difficulty level and the image you prefer, enjoy!</p>
        <Difficulty />
        <ImageSelect />
        <a href="#puzzle" accessKey="0" className="inline-flex items-center justify-center size-24 p-6 text-[#364852] bg-white uppercase font-bold rounded-full">Start</a>
      </Header>

      <section id="puzzle" className="container">
        <h3>Puzzle</h3>

        <Nav />

        <div id="puzzle-picture-original" className="hide">
          <p>No image</p>
        </div>

        <div id="puzzle-game-original">
          <p>Please, start a new game</p>
        </div>
        <div id="puzzle-game-grid">
          <p>No puzzle</p>
        </div>
      </section>

      <Footer />

    </>
  )
}

export default App
