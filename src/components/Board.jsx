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
      draggingClass: "dragging",
      dragPlaceholderClass: "drag-placeholder",
      dropZoneClass: "drop-zone",
    },
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
    // Insert DOM as either map method and loop return image.src as empty and do not why yet.
    pieces.forEach((piece) => {
      // Add new pieces into the board.
      const container = document.createElement('div');
      container.appendChild(piece);
      boardRef.current.appendChild(container);
    });
  }

  return (
    <>
      {!isNewGame && <p className="mt-6">Please <a href="#home">start a new game</a></p>}
      <div ref={boardRef} id="board" className={`grid ${gridColumns[gameOptions.difficulty]} w-[300px] lg:w-[600px] my-8`}></div>
    </>
  );
};
