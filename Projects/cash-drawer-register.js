// Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

// cid is a 2D array listing available currency.

// The checkCashRegister() function should always return an object with a status key and a change key.

// Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

// Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

// Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

function checkCashRegister(price, cash, cid) {
  const currencyUnit = [
    { name: 'PENNY', value: 0.01 },
    { name: 'NICKEL', value: 0.05 },
    { name: 'DIME', value: 0.1 },
    { name: 'QUARTER', value: 0.25 },
    { name: 'DOLLAR', value: 1 },
    { name: 'FIVE', value: 5 },
    { name: 'TEN', value: 10 },
    { name: 'TWENTY', value: 20 },
    { name: 'ONE HUNDRED', value: 100 }
  ];

  const changeDue = cash - price;

  const amount = cid.map(perChange =>
    perChange.filter(change => typeof change === 'number')
  );

  const flattenedAmountArr = [].concat.apply([], amount);

  const totalCashInDrawer = flattenedAmountArr.reduce((a, b) => a + b);

  if (totalCashInDrawer === changeDue) {
    return { status: 'CLOSED', change: cid };
  }

  if (
    totalCashInDrawer < changeDue ||
    !flattenedAmountArr.every(amount => amount % changeDue !== 0)
  ) {
    return { status: 'INSUFFICIENT_FUNDS', change: [] };
  }

  if (totalCashInDrawer > changeDue) {
    return { status: 'OPEN' };
  }
}

console.log(
  checkCashRegister(19.5, 20, [
    ['PENNY', 1.01],
    ['NICKEL', 2.05],
    ['DIME', 3.1],
    ['QUARTER', 4.25],
    ['ONE', 90],
    ['FIVE', 55],
    ['TEN', 20],
    ['TWENTY', 60],
    ['ONE HUNDRED', 100]
  ])
);
console.log(
  checkCashRegister(3.26, 100, [
    ['PENNY', 1.01],
    ['NICKEL', 2.05],
    ['DIME', 3.1],
    ['QUARTER', 4.25],
    ['ONE', 90],
    ['FIVE', 55],
    ['TEN', 20],
    ['TWENTY', 60],
    ['ONE HUNDRED', 100]
  ])
);
console.log(
  checkCashRegister(19.5, 20, [
    ['PENNY', 0.01],
    ['NICKEL', 0],
    ['DIME', 0],
    ['QUARTER', 0],
    ['ONE', 0],
    ['FIVE', 0],
    ['TEN', 0],
    ['TWENTY', 0],
    ['ONE HUNDRED', 0]
  ])
);
console.log(
  checkCashRegister(19.5, 20, [
    ['PENNY', 0.01],
    ['NICKEL', 0],
    ['DIME', 0],
    ['QUARTER', 0],
    ['ONE', 1],
    ['FIVE', 0],
    ['TEN', 0],
    ['TWENTY', 0],
    ['ONE HUNDRED', 0]
  ])
);
console.log(
  checkCashRegister(19.5, 20, [
    ['PENNY', 0.5],
    ['NICKEL', 0],
    ['DIME', 0],
    ['QUARTER', 0],
    ['ONE', 0],
    ['FIVE', 0],
    ['TEN', 0],
    ['TWENTY', 0],
    ['ONE HUNDRED', 0]
  ])
);

// https://www.youtube.com/watch?v=d-Q7BvjERwo
