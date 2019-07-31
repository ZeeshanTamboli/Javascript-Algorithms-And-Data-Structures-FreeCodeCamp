function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;

  return arr.map(obj => {
    const squareRoot = Math.sqrt(Math.pow(obj.avgAlt + earthRadius, 3) / GM);
    obj.orbitalPeriod = Math.round(Math.PI * 2 * squareRoot);
    return {
      name: obj.name,
      orbitalPeriod: obj.orbitalPeriod
    };
  });
}

console.log(orbitalPeriod([{ name: 'sputnik', avgAlt: 35873.5553 }]));
console.log(
  orbitalPeriod([
    { name: 'iss', avgAlt: 413.6 },
    { name: 'hubble', avgAlt: 556.7 },
    { name: 'moon', avgAlt: 378632.553 }
  ])
);
