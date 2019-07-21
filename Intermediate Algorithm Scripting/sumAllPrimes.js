// Sum all the prime numbers up to and including the provided number.

// A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.

// The provided number may not be a prime

function sumPrimes(num) {
  const primeNumbers = [];
  for (let i = 0; i <= num; i++) {
    // First check whether the number less than or equal to the provided number is prime
    if (isPrime(i)) {
      primeNumbers.push(i);
    }
  }
  // Sum all prime numbers present in the array
  return primeNumbers.reduce((a, b) => a + b);
}

// Here 'num' is the increment of the above for loop
function isPrime(num) {
  // Prime number starts with 2
  if (num < 2) return false;
  for (let i = 2; i < num; i++) {
    // Divide the number by the increment -- Check if remainder is 0 (Prime numbers have a remainder)
    if (num % i === 0) return false;
  }
  return true;
}

console.log(sumPrimes(10));
console.log(sumPrimes(977));
