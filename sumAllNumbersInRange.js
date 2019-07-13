function sumAll(arr) {
  let total = 0;
  const firstElement = arr[0];
  const lastElement = arr[1];

  if (firstElement < lastElement) {
    for (let i = firstElement; i <= lastElement; i++) {
      total = total + i;
    }
  }

  if (firstElement > lastElement) {
    for (let i = firstElement; i >= lastElement; i--) {
      total = total + i;
    }
  }

  return total;
}

console.log(sumAll([1, 4]));
console.log(sumAll([4, 1]));
