function destroyer(arr) {
  // delete first argument of the function in 'arguments' object
  delete arguments['0'];

  // Get the 'arguments' object values in an array
  const otherArgs = Object.keys(arguments).map(x => arguments[x]);

  // Check for difference in two arrays
  return arr.filter(x => !otherArgs.includes(x));
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
