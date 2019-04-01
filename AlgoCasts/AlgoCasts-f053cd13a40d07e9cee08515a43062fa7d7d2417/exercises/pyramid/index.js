// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'



/*
n3

    c1  c2  c3  c4  c5 
r1  -   -   #   -   -

r2  -   #   #   #   -

r3  #   #   #   #   #


*/

function pyramid(n, row = 0, level = '') {
    if (row === n) {
        return;
    }

    if (level.length === 2 * n - 1) {
        console.log(level);
        return pyramid(n, row + 1);
    }

    const midPoint = Math.floor((n * 2 - 1) / 2);
    let add;
    if (midPoint - row <= level.length && midPoint + row >= level.length) {
        add = '#';
    } else {
        add = ' ';
    }

    pyramid(n, row, level + add);
}

module.exports = pyramid;

/*
Solution 1

function pyramid(n) {
    //Calculate the mid poit of the row
    const midPoint = Math.floor((2 * n - 1) / 2);

    for (let row = 0; row < n; row++) {
        let level = '';

        for (let column = 0; column < 2 * n - 1; column++) {
            if (midPoint - row <= column && midPoint + row >= column) {
                level += '#';
            } else {
                level += ' ';
            }        
        }

        console.log(level);
    }
}

*/
