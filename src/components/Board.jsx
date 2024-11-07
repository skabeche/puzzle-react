import { useEffect } from "react";
import { dropOrSwap } from "@formkit/drag-and-drop";
import { useDragAndDrop } from "@formkit/drag-and-drop/react";
import Puzzle from "../utils/puzzle";
import { removeAllChilds } from "../helpers/dom";

export const Board = ({ isNewGame, gameOptions }) => {
  const gridColumns = {
    4: 'grid-cols-2',
    9: 'grid-cols-3',
    16: 'grid-cols-4',
  };
  const [boardRef, pieces, setPieces] = useDragAndDrop([],
    {
      plugins: [
        dropOrSwap({
          shouldSwap: () => {
            return true;
          },
        }),
      ],
    });

  const createPuzzle = () => {
    const puzzle = new Puzzle(gameOptions.image, gameOptions.difficulty);
    setPieces(puzzle.create());
  };

  useEffect(() => {
    if (!isNewGame) return;

    createPuzzle();
  }, [isNewGame]);

  if (isNewGame) {
    // Remove previous game pieces.
    removeAllChilds(boardRef.current);
    // Add new pieces into the board.
    // Using map method returns image.src as empty and do not why yet.
    pieces.forEach(piece => boardRef.current.appendChild(piece));
  }

  return (
    <div ref={boardRef} className={`grid ${gridColumns[gameOptions.difficulty]} w-[500px]`}>
      <p>Please start a new game</p>
    </div>
  );
};
