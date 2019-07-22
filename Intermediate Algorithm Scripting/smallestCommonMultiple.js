// Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

// The range will be an array of two numbers that will not necessarily be in numerical order.

// For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

// This is a copied solution explained in this tutorial - https://www.youtube.com/watch?v=LpGgtkmRvqc
function smallestCommons(arr) {
  // Sort provided array in ascending order
  arr.sort((a, b) => a - b);

  const array = [];
  const firstArrElement = arr[0];
  const secondArrElement = arr[1];

  for (let i = firstArrElement; i <= secondArrElement; i++) {
    array.push(i);
  }

  let LCM = 0;
  let x = true;
  const firstNewArrElement = array[0];
  const lastNewArrElement = array[array.length - 1];

  while (x) {
    LCM++;
    for (let j = firstNewArrElement; j <= lastNewArrElement; j++) {
      if (LCM % j !== 0) {
        break;
      }
      if (j === lastNewArrElement) {
        x = false;
      }
    }
  }

  return LCM;
}

console.log(smallestCommons([1, 3]));
console.log(smallestCommons([1, 5]));
console.log(smallestCommons([5, 1]));
console.log(smallestCommons([2, 10]));
console.log(smallestCommons([1, 13]));
console.log(smallestCommons([23, 18]));
