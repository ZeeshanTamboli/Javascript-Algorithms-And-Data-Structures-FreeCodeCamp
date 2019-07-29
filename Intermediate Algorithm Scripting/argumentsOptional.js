// Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

function areArgumentsOfTypeNumber(functionArguments) {
  for (let i = 0; i < functionArguments.length; i++) {
    if (typeof functionArguments[i] !== 'number') {
      return false;
    }
  }
  return true;
}

function pushArgsToArray(args, finalArray) {
  for (let i = 0; i < args.length; i++) {
    finalArray.push(args[i]);
  }
}

function addTogether() {
  const parentArguments = arguments;

  if (!areArgumentsOfTypeNumber(parentArguments)) return undefined;

  const finalArray = [];

  pushArgsToArray(parentArguments, finalArray);

  if (finalArray.length < 2) {
    return function innerFunction() {
      const innerArguments = arguments;

      if (!areArgumentsOfTypeNumber(innerArguments)) return undefined;

      pushArgsToArray(innerArguments, finalArray);
      return finalArray.reduce((a, b) => a + b);
    };
  }
  return finalArray.reduce((a, b) => a + b);
}

console.log(addTogether(2, 3));
console.log(addTogether(2)(3));
console.log(addTogether('http://bit.ly/IqT6zt'));
console.log(addTogether(2, '3'));
console.log(addTogether(2)([3]));
