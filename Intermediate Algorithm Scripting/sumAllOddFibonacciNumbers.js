// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

// The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

function sumFibs(num) {
  const fibonacciSeries = [1, 1];
  for (let i = 2; i <= num; i++) {
    const beforePreviousNumber = fibonacciSeries[i - 2];
    const previousNumber = fibonacciSeries[i - 1];

    fibonacciSeries[i] = beforePreviousNumber + previousNumber;
  }

  return fibonacciSeries
    .filter(x => x <= num && x % 2 === 1) // Filter element should be less than the provided number and should be odd
    .reduce((a, b) => a + b); // Sum all odd fibonacci numbers
}

console.log(sumFibs(1));
console.log(sumFibs(4));
console.log(sumFibs(10));
console.log(sumFibs(4000000));
console.log(sumFibs(75024));
console.log(sumFibs(75025));
