// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
    const arr = [root, 's']; // 's' is the flag to know if we are located at the final of a tree level or not 
    const counters = [0];

    //if arr.length is more than 1 it means there is more values apart from the stopper flag 's'
    while (arr.length > 1) {    
        const node = arr.shift();//Takes out the first element of the array

        if (node === 's') {
            counters.push(0);
            arr.push('s'); //To add again the 's' flag for the next tree level
        } else {
            arr.push(...node.children);
            counters[counters.length - 1]++;
        }
    }

    return counters;
}

module.exports = levelWidth;
