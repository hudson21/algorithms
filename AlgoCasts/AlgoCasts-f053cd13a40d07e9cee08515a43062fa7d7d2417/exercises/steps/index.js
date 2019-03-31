// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'


/*
    c1  c2  c3
r1  *   -   -

r2  *   *   -

r3  *   *   *

if column 


*/


function steps(n, row = 0, stair = '') {
    if (n === row) {
      return;
    }

    if (n === stair.length) {
      console.log(stair);
      return steps(n, row + 1);
    }

    if (stair.length <= row) {
      stair += '#';
    } else {
      stair += '';
    }
    
    steps(n, row, stair);
}

module.exports = steps;

/*
Solution 1

function steps(n) {
    for (let row = 0; row < n; row++) {
        let stair = '';

        for (let column = 0; column < n; column++) {
            if (column <= row) {
                stair += '#';
            } else {
                stair += ' ';
            }
        }
        console.log(stair);
    }
  
}

*/

/*
My Solution

function steps(n) {
  for (let i = 1; i <= n; i++) {
    const spaces = n - i;
    console.log(addSpaces(spaces, i));
  }
}

function addSpaces(spaces, iteration) {
  let result = '';
  for (let i = 1; i <= iteration; i++) {
    result += '#';
  }
  for (let i = 1; i <= spaces; i++) {
    result += ' ';
  }
  return result;
}

steps(2);

*/

