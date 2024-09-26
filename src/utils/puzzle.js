class Puzzle {

  constructor(image, numPieces) {
    this.image = image;
    this.numPieces = numPieces;
  }

  /**
   * Create puzzle pieces.
   */
  create() {
    // Create nodes in DOM.
    let puzzle = document.createElement('div');
    puzzle.classList.add('pieces');
    let piece;
    let numRows = Math.sqrt(this.numPieces);
    let numCols = Math.sqrt(this.numPieces);

    // Create pieces and their images.
    for (let i = 0; i < numRows; i++) {
      for (let j = 0; j < numCols; j++) {
        // Original pieces.
        piece = this.cropImage(this.image, numRows, numCols, i, j);
        piece.id = 'piece-' + i + j;
        piece.classList.add('piece');
        // piece.draggable = 'true';
        // Add node.
        puzzle.appendChild(piece);
      }
    }

    // Shuffle pieces.
    // this.shuffle();

    // console.log(puzzle);

    return puzzle;

  }


  shuffle() {
    // code
  }

  /**
   * Crop an image in n pieces.
   * 
   * @param {HTMLElement} image
   * @param {int} numRows
   * @param {int} numCols
   * @param {int} i
   * @param {int} j
   *
   * @return {HTMLElement}
  */
  cropImage(image, numRows, numCols, i, j) {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    let imageFragment = new Image();

    canvas.width = image.naturalWidth / numRows;
    canvas.height = image.naturalHeight / numCols;
    // imageCanvas.crossOrigin = 'Anonymous';
    // imageX.crossOrigin = 'Anonymous';

    // image.onload = () => {
    // Draw cropped image.
    const sourceX = (image.naturalWidth / numRows) * j;
    const sourceY = (image.naturalHeight / numCols) * i;
    const sourceWidth = image.naturalWidth / numRows;
    const sourceHeight = image.naturalHeight / numCols;
    const destWidth = sourceWidth;
    const destHeight = sourceHeight;
    const destX = canvas.width / 2 - destWidth / 2;
    const destY = canvas.height / 2 - destHeight / 2;

    context.drawImage(image, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight);

    // Convert canvas to image.
    imageFragment.src = canvas.toDataURL('image/png');
    // };

    return imageFragment;
  }

}

export default Puzzle
