import { useRef, forwardRef, useImperativeHandle } from "react";
import Puzzle from "../utils/puzzle";
import { removeAllChilds } from "../helpers/dom";

const Board = forwardRef(({ image, difficulty }, ref) => {
  const boardRef = useRef(null);
  const gridColumns = {
    4: 'grid-cols-2',
    9: 'grid-cols-3',
    16: 'grid-cols-4',
  };

  const createPuzzle = () => {
    const puzzle = new Puzzle(image, difficulty);
    // Remove previous game pieces
    removeAllChilds(boardRef.current);
    // Add new pieces into the board
    puzzle.create().forEach(piece => boardRef.current.appendChild(piece));
  };

  // Emit the function to the parent.
  useImperativeHandle(ref, () => ({
    createPuzzle,
  }));

  return (
    <div ref={boardRef} className={`grid ${gridColumns[difficulty]} w-[500px]`}>
      {/* <p>Please, start a new game</p> */}
    </div>
  );
});

Board.displayName = "Board";

export default Board;
