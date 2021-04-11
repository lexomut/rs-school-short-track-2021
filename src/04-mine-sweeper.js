/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix1) {
  const matrix = matrix1;
  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[1].length; x++) {
      if (matrix[y][x]) matrix[y][x] = 'mine';
    }
  }

  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[1].length; x++) {
      if (!matrix[y][x]) {
        if (y === 0) {
          if (matrix[y][x - 1] === 'mine') matrix[y][x]++;
          if (matrix[y][x] === 'mine') matrix[y][x]++;
          if (matrix[y][x + 1] === 'mine') matrix[y][x]++;
          if (matrix[y + 1][x - 1] === 'mine') matrix[y][x]++;
          if (matrix[y + 1][x] === 'mine') matrix[y][x]++;
          if (matrix[y + 1][x + 1] === 'mine') matrix[y][x]++;
        }
        if (y > 0 && y < matrix.length - 1) {
          if (matrix[y - 1][x - 1] === 'mine') matrix[y][x]++;
          if (matrix[y - 1][x] === 'mine') matrix[y][x]++;
          if (matrix[y - 1][x + 1] === 'mine') matrix[y][x]++;
          if (matrix[y][x - 1] === 'mine') matrix[y][x]++;
          if (matrix[y][x] === 'mine') matrix[y][x]++;
          if (matrix[y][x + 1] === 'mine') matrix[y][x]++;
          if (matrix[y + 1][x - 1] === 'mine') matrix[y][x]++;
          if (matrix[y + 1][x] === 'mine') matrix[y][x]++;
          if (matrix[y + 1][x + 1] === 'mine') matrix[y][x]++;
        }

        if (y === matrix.length - 1) {
          if (matrix[y - 1][x - 1] === 'mine') matrix[y][x]++;
          if (matrix[y - 1][x] === 'mine') matrix[y][x]++;
          if (matrix[y - 1][x + 1] === 'mine') matrix[y][x]++;
          if (matrix[y][x - 1] === 'mine') matrix[y][x]++;
          if (matrix[y][x] === 'mine') matrix[y][x]++;
          if (matrix[y][x + 1] === 'mine') matrix[y][x]++;
        }
      }
    }
  }
  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[1].length; x++) {
      if (matrix[y][x] === 'mine') matrix[y][x] = 1;
      if (matrix[y][x] === false) matrix[y][x] = 0;
    }
  }
  return matrix;
}

module.exports = minesweeper;
