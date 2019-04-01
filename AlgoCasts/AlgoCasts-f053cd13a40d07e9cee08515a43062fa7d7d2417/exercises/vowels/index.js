// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
   // g: dont stop in the first match
   // i: insensitive cases lowerCase and upperCase
   const matches = str.match(/[aeiou]/gi);
   return matches ? matches.length : 0;
}

module.exports = vowels;

/*
My Solution

function vowels(str) {
  let splitedStr = str.toLowerCase();
  let vowelsMap = {};
  let result = 0;

  for (let vowel of splitedStr) {
    if(vowel === 'a' || 
      vowel === 'e' ||
      vowel === 'i' ||
      vowel === 'o' ||
      vowel === 'u') {
        if(!vowelsMap[vowel]) vowelsMap[vowel] = 1;
        else {
          vowelsMap[vowel]++
        } 
    } 
  }

  for (let vowel in vowelsMap) {
    result += vowelsMap[vowel];
  }

  return result;
}

console.log(vowels('Why do you ask?'));

*/

/*
Another Solution

function vowels(str) {
  let splitedStr = str.toLowerCase();
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let result = 0;

  for (let vowel of splitedStr) {
    if (vowels.indexOf(vowel) !== -1) {
      result++;
    }
  }

  return result;
}

console.log(vowels('Hi There!'));

*/

/*
Solution 1

function vowels(str) {
    let count = 0;
    const checker = ['a', 'e', 'i', 'o', 'u'];

    for (let char of str.toLowerCase()) {
        if (checker.includes(char)) {
            count++;
        } 
    }

    return count;
}

*/