// Find the missing letter in the passed letter range and return it.

// If all letters are present in the range, return undefined.

function fearNotLetter(str) {
  for (let i = 0; i < str.length; i++) {
    const charCodeAtCurrentIterator = str.charCodeAt(i);
    const charCodeAtNextIterator = str.charCodeAt(i + 1);
    if (
      charCodeAtNextIterator - charCodeAtCurrentIterator !== 1 &&
      !!charCodeAtNextIterator
    ) {
      return String.fromCharCode(charCodeAtCurrentIterator + 1);
    }
  }
  return undefined;
}

console.log(fearNotLetter('abce'));
console.log(fearNotLetter('abcdefghjklmno'));
console.log(fearNotLetter('stvwx'));
console.log(fearNotLetter('bcdf'));
console.log(fearNotLetter('bcdeg'));
console.log(fearNotLetter('abcdefghijklmnopqrstuvwxyz'));
