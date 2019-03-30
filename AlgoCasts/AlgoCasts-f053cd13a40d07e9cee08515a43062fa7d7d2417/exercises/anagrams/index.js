// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

module.exports = anagrams;

/*
My solution

function anagrams(stringA, stringB) {
  let isAnagram = true;
  const word1 = stringA.replace(/[^\w]/g, "").toLowerCase();
  const word2 = stringB.replace(/[^\w]/g, "").toLowerCase();
  const word1Hash = {};
  const word2Hash = {};
  const maxWord = word1.length > word2.length ? 'word1' : 'word2';

  for (let word of word1) {
    if(!word1Hash[word]) word1Hash[word] = 0;
    word1Hash[word]++;
  }

  for (let word of word2) {
    if(!word2Hash[word]) word2Hash[word] = 0;
    word2Hash[word]++;
  }

  if (maxWord === 'word1') {
    for (let word in word1Hash) {
      if (word1Hash[word] !== word2Hash[word]) isAnagram = false;
    }
  }else {
    for (let word in word2Hash) {
      if (word2Hash[word] !== word1Hash[word]) isAnagram = false;
    }
  }

  return isAnagram;
}

console.log(anagrams('RAIL! SAFETY!a', 'fairy talesa'));

*/

/*
Solution 1 

function anagrams(stringA, stringB) {
    word1Hash = buildCharMap(stringA);
    word2Hash = buildCharMap(stringB);

    //If both objects don have the same same it must be returned false
    if (Object.keys(word1Hash).length !== Object.keys(word2Hash).length) {
        return false
    } 
    
    for (let word in word1Hash) {
        if (word1Hash[word] !== word2Hash[word]) return false;
    }
    
    return true;
}

function buildCharMap(str) {
    str = str.replace(/[^\w]/g, "").toLowerCase();
    const strHash = {};

    for (let word of str ) {
        if(!strHas[word]) strHas[word] = 0;
        strHas[word]++;
    }
    return strHash;
}

*/