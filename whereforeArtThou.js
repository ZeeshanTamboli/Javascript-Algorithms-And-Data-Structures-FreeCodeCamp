function whatIsInAName(collection, source) {
  return collection.filter(
    obj =>
      Object.keys(source).every(x => Object.keys(obj).includes(x)) &&
      Object.values(source).every(x => Object.values(obj).includes(x))
  );
}

console.log(whatIsInAName([{ a: 1, b: 2, c: 3 }], { a: 1, b: 9999, c: 3 }));
