// Convert the given number into a roman numeral.

// Copied this function from stackoverflow :P - https://stackoverflow.com/questions/34110725/convert-number-to-tens-hundreds-thousands. But the idea to do this was mine
function separateNumberIntoUnits(n) {
  if (n == 0) return [0];
  // n = Math.floor(n); // needed for decimal numbers
  const arr = [];
  let i = 1;

  while (n > 0) {
    arr.unshift((n % 10) * i);
    n = Math.floor(n / 10);
    i *= 10;
  }

  return arr;
}

function convertToRoman(num) {
  const combinations = {
    1: 'I',
    2: 'II',
    3: 'III',
    4: 'IV',
    5: 'V',
    6: 'VI',
    7: 'VII',
    8: 'VIII',
    9: 'IX',
    10: 'X',
    20: 'XX',
    30: 'XXX',
    40: 'XL',
    50: 'L',
    60: 'LX',
    70: 'LXX',
    80: 'LXXX',
    90: 'XC',
    100: 'C',
    200: 'CC',
    300: 'CCC',
    400: 'CD',
    500: 'D',
    600: 'DC',
    700: 'DCC',
    800: 'DCCC',
    900: 'CM',
    1000: 'M'
  };

  const separtedIntoUnits = separateNumberIntoUnits(num);

  return separtedIntoUnits
    .map(unit => {
      if (unit > 1000) {
        // If a number in the separatedUnits is greater than 1000, divide that number by 1000 to get the number of times we need separate 1000 'M'.
        const times = unit / 1000;
        const newArr = [];
        for (let i = 1; i <= times; i++) {
          // Iterate till times
          newArr.push(combinations[1000]);
        }
        return newArr.join('');
      }
      return combinations[unit];
    })
    .join('');
}

console.log(convertToRoman(2));
console.log(convertToRoman(3));
console.log(convertToRoman(4));
console.log(convertToRoman(5));
console.log(convertToRoman(9));
console.log(convertToRoman(12));
console.log(convertToRoman(16));
console.log(convertToRoman(29));
console.log(convertToRoman(44));
console.log(convertToRoman(45));
console.log(convertToRoman(68));
console.log(convertToRoman(83));
console.log(convertToRoman(97));
console.log(convertToRoman(99));
console.log(convertToRoman(400));
console.log(convertToRoman(500));
console.log(convertToRoman(501));
console.log(convertToRoman(649));
console.log(convertToRoman(798));
console.log(convertToRoman(891));
console.log(convertToRoman(1000));
console.log(convertToRoman(1004));
console.log(convertToRoman(1006));
console.log(convertToRoman(1023));
console.log(convertToRoman(2014));
console.log(convertToRoman(3999));
