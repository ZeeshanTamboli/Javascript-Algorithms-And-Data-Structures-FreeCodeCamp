function steamrollArray(array) {
  var flattend = [];

  // Immediately invoke function (Immediately call the function after it's declaration)
  (function flat(array) {
    // Loop over the array
    array.forEach(function(el) {
      // Check if element is an array itself. Then again call the function passing that element and loop over the nested array
      if (Array.isArray(el)) flat(el);
      else flattend.push(el);
    });
  })(array);
  return flattend;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));
console.log(steamrollArray([[['a']], [['b']]]));
console.log(steamrollArray([1, [], [3, [[4]]]]));
console.log(steamrollArray([1, {}, [3, [[4]]]]));
