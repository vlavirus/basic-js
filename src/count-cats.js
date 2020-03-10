module.exports = function countCats( matrix ) {
  
  let count_cats = 0;
  let count_array = matrix.length;

  for ( let row = 0; row < count_array; row++ ) {
    let array_length = matrix[row].length;
    for ( let column = 0; column < array_length; column++) {
      if ( matrix[row][column] == '^^' ) {
        count_cats += 1;
      }
    }
  }

  return count_cats;
};
