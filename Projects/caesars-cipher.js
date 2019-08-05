// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

// Write a function which takes a ROT13 encoded string as input and returns a decoded string.

// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

function rot13(str) {
  return str
    .split(' ') // split the strings into array between spaces
    .map(letter => {
      let newLetterOrNumber = letter.split('').map(alphabet => {
        const charCode = alphabet.charCodeAt(); // Get char code of each alphabet from the splitted letters array
        if (charCode <= 90 && charCode >= 65) {
          // Here we only get the shifted charcodes of that letter whose charCode range is between 65 and 90 i.e between A to Z
          return charCode + 13;
        }
        // If the charcode is not fitting means that it is not from A-Z. Simply return that letter
        return alphabet;
      });

      const newWord = newLetterOrNumber.map(element => {
        if (typeof element !== 'number') {
          // Check if the element is a number. If not return that element
          return element;
        }
        if (element > 90) {
          // After adding 13, the changed charcodes may go beyond 90. But since we want only between A-Z we find the exceeded difference and add it from A (65) to get it from start
          element = 64 + (element - 90);
        }
        return String.fromCharCode(element); // Convert the new charcode to it's equivalent string
      });
      return newWord.join(''); // join those inner array elements
    })
    .join(' '); // join those final array elements with a space to get the decoded sentence
}

console.log(rot13('SERR PBQR PNZC'));
console.log(rot13('SERR CVMMN!'));
console.log(rot13('SERR YBIR?'));
console.log(rot13('GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.'));
