import { useRef, useState } from 'react'
import { Header } from "./components/Header"
import { Logo } from "./components/Logo"
import { PuzzleOptions } from "./components/PuzzleOptions"
import { Nav } from "./components/Nav"
import { Footer } from "./components/Footer"
import Puzzle from "./utils/puzzle"
import { removeAllChilds } from "./helpers/dom"

export default function App() {
  const boardRef = useRef(null);
  const [difficulty, setDifficulty] = useState(4);
  const [imagePuzzle, setImagePuzzle] = useState('');

  const newGame = () => {
    const puzzle = new Puzzle(imagePuzzle, difficulty);

    // Remove previous game.
    removeAllChilds(boardRef.current);
    // Add pieces into board.
    puzzle.create().forEach(piece => boardRef.current.appendChild(piece));
  }

  const getOptions = (image, difficulty) => {
    setDifficulty(difficulty)
    setImagePuzzle(image)
  }

  const gridColumns = {
    4: 'grid-cols-2',
    9: 'grid-cols-3',
    16: 'grid-cols-4',
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

        <div ref={boardRef} className={`grid ${gridColumns[difficulty]} w-[500px]`}>
          {/* <p>Please, start a new game</p> */}
        </div>

        <div id="board">
          <p>No puzzle</p>
        </div>
      </section>

      <Footer />

    </>
  )
}
