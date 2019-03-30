// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const splitStr = str.split('');    
}


/*
My Approach with a little help 

function maxChar(str) {
    const hashTable = {};
    let max = 0;
    let maxChar = '';

    for (let word of str) {
      if(!hashTable[word]) hashTable[word] = 0;
      hashTable[word]++; 
    }

    for (let word in hashTable) {
      if (hashTable[word] > max) {
        max = hashTable[word];
        maxChar = word; 
      }
    }
    
    console.log(hashTable);
    console.log("maxChar", maxChar);  
}

maxChar('Hello There')

*/
module.exports = maxChar;
