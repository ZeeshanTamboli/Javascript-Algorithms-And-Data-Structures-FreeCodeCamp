// Return true if the given string is a palindrome. Otherwise, return false.

// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

// Note
// You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

// We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.

// We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".

function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = arr1.length; i > 0; i--) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

function palindrome(str) {
  const regex = /[^A-Za-z0-9]/gi; // Regex for non-alphanumeric characters
  const replacedString = str.replace(regex, '').toLowerCase(); // Remove non-alphanumeric characters

  const arr1 = [];
  const arr2 = [];

  // Iterate from beginning through the new string and push it to array
  for (let i = 0; i < replacedString.length; i++) {
    arr1.push(replacedString[i]);
  }

  // Iterate from end and push it to another array
  for (let i = replacedString.length; i > 0; i--) {
    arr2.push(replacedString[i - 1]);
  }

  // Check if both the arrays are equal and their order should be also same. Return true or false
  return arraysEqual(arr1, arr2);
}

console.log(palindrome('eye'));
console.log(palindrome('eye'));
console.log(palindrome('_eye'));
console.log(palindrome('race car'));
console.log(palindrome('not a palindrome'));
console.log(palindrome('A man, a plan, a canal. Panama'));
console.log(palindrome('never odd or even'));
console.log(palindrome('nope'));
console.log(palindrome('almostomla'));
console.log(palindrome('My age is 0, 0 si ega ym.'));
console.log(palindrome('1 eye for of 1 eye.'));
console.log(palindrome('0_0 (: /- :) 0-0'));
console.log(palindrome('five|_/|four'));
