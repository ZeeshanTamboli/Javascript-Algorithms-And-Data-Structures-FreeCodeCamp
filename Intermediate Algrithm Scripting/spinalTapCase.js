// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes
function spinalCase(str) {
  const regex1 = /([a-z])([A-Z])/g;
  const regex2 = /\s/g;
  const regex3 = /_/g;

  /* 
  1. First 'replace' method splits the camelCase string into a spaced sentence (A regex which will split if, and only if, the former character is lower-case and the latter is upper-case.)
  Stackoverflow article - https://stackoverflow.com/questions/18379254/regex-to-split-camel-case.

  2. Then we lowercase all string by 'toLowerCase' method.

  3. Then we replace all spaces with '-' which is regex2

  4. Then we replace all '_' with '-' which is regex3
  */
  return str
    .replace(regex1, '$1 $2')
    .toLowerCase()
    .replace(regex2, '-')
    .replace(regex3, '-');
}

console.log(spinalCase('This Is Spinal Tap'));
console.log(spinalCase('thisIsSpinalTap'));
console.log(spinalCase('The_Andy_Griffith_Show'));
console.log(spinalCase('AllThe-small Things'));
