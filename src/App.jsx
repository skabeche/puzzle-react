import { useState, useRef } from 'react'
import { Header } from "./components/Header"
import { Logo } from "./components/Logo"
import { PuzzleOptions } from "./components/PuzzleOptions"
import { Nav } from "./components/Nav"
import { Footer } from "./components/Footer"
import Board from "./components/Board"

export default function App() {
  const boardChildRef = useRef(null);
  const [difficulty, setDifficulty] = useState(4);
  const [imagePuzzle, setImagePuzzle] = useState('');

  const newGame = () => {
    if (boardChildRef.current) {
      // Call fuction in Board component.
      boardChildRef.current.createPuzzle();
    }
  }

  const getOptions = (image, difficulty) => {
    setDifficulty(difficulty)
    setImagePuzzle(image)
  }

  return (
    <>
      <Header>
        <Logo />
        <p>Puzzles are fun ways to pass the time that also provide a challenge for our brains. Choose the difficulty level and the image you prefer, enjoy!</p>
        <PuzzleOptions options={getOptions} />
        <a className="inline-flex items-center justify-center size-24 p-6 text-[#364852] bg-white uppercase font-bold rounded-full" onClick={newGame} href="#puzzle" accessKey="0">Start</a>
      </Header>

      <section id="puzzle" className="container">
        <h2>Puzzle</h2>
        <Nav />

        <Board ref={boardChildRef} image={imagePuzzle} difficulty={difficulty} />

        {/* <div id="board">
          <p>No puzzle</p>
        </div> */}
      </section>

      <Footer />
    </>
  )
}
