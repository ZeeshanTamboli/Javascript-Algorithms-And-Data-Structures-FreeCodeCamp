// Translate the provided string to pig latin.

// Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

// If a word begins with a vowel you just add "way" to the end.

// Input strings are guaranteed to be English words in all lowercase.

function translatePigLatin(str) {
  const regex = /[aeiou]/g;

  let newStr = str.split('');
  let stringLen = newStr.length;
  for (let i = 0; i < stringLen; i++) {
    if (newStr[0].match(regex)) {
      return newStr.join('').concat('way');
    }
  }

  let splittedString = str.split(/([aeiou])/); // capturing parenthesis - retains the delimiter
  let firstStringElement = splittedString.shift();
  return splittedString.join('').concat(`${firstStringElement}ay`);
}

console.log(translatePigLatin('consonant'));
console.log(translatePigLatin('paragraphs'));
console.log(translatePigLatin('glove'));
console.log(translatePigLatin('algorithm'));
console.log(translatePigLatin('eight'));
