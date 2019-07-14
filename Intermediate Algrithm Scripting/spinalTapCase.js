// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes
function spinalCase(str) {
  const regex1 = /([a-z])([A-Z])/g; // grouping
  const regex2 = /[_\s]/g;

  /* 
  1. First 'replace' method splits the camelCase string into a spaced sentence (A regex which will split if, and only if, the former character is lower-case and the latter is upper-case.)
  Stackoverflow article - https://stackoverflow.com/questions/18379254/regex-to-split-camel-case.

  2. Then we lowercase all string by 'toLowerCase' method.

  3. Then we replace all spaces or '_' (underscore) with '-' which is regex2
  */
  return str
    .replace(regex1, '$1 $2') // '$1 $2' means 'group1 group2' in regex
    .toLowerCase()
    .replace(regex2, '-');
}

console.log(spinalCase('This Is Spinal Tap'));
console.log(spinalCase('thisIsSpinalTap'));
console.log(spinalCase('The_Andy_Griffith_Show'));
console.log(spinalCase('AllThe-small Things'));
