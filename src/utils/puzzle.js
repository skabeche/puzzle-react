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
    // console.log(puzzle.getElementsByTagName('img'));
    // puzzle = this.shuffle(puzzle.getElementsByTagName('img'));

    return puzzle;

  }

  /**
   * Randomize array element order.
   * Fisher-Yates algorithm
   * 
   * @param {array} element
   */
  shuffle(element) {
    for (let j, x, i = element.length; i; j = parseInt(Math.random() * i), x = element[--i], element[i] = element[j], element[j] = x);

    return element;
  }

  /**
   * Crop an image in n pieces.
   * 
   * @param {string} imageUrl
   * @param {int} numRows
   * @param {int} numCols
   * @param {int} i
   * @param {int} j
   *
   * @return {HTMLElement}
  */
  cropImage(imageUrl, numRows, numCols, i, j) {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    let image = new Image();
    let imageFragment = new Image();

    image.onload = () => {
      canvas.width = image.naturalWidth / numRows;
      canvas.height = image.naturalHeight / numCols;
      // canvas.crossOrigin = 'anonymous';
      image.crossOrigin = 'anonymous';

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
    };
    image.src = imageUrl;

    return imageFragment;
  }

}

export default Puzzle
