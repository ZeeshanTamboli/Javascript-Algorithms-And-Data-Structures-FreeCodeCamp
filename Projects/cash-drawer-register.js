// Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

// cid is a 2D array listing available currency.

// The checkCashRegister() function should always return an object with a status key and a change key.

// Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

// Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

// Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

function checkCashRegister(price, cash, cid) {
  // Define the currency units
  const currencyUnit = {
    PENNY: 0.01,
    NICKEL: 0.05,
    DIME: 0.1,
    QUARTER: 0.25,
    ONE: 1,
    FIVE: 5,
    TEN: 10,
    TWENTY: 20,
    'ONE HUNDRED': 100
  };

  let changeDue = cash - price; // Calculate change that is to be paid

  // Get the amount of cash in registers for each currency
  const amount = cid.map(perChange =>
    perChange.filter(change => typeof change === 'number')
  );

  const flattenedAmountArr = [].concat.apply([], amount); // Flatten nested arrays having amount

  const totalCashInDrawer = flattenedAmountArr.reduce((a, b) => a + b); // Calculate total cash in drawer

  // If it is same, means that it is paid. No need to give any change
  if (totalCashInDrawer === changeDue) {
    return { status: 'CLOSED', change: cid };
  }

  // If there is less cash in drawer, means there is no change to give
  if (totalCashInDrawer < changeDue) {
    return { status: 'INSUFFICIENT_FUNDS', change: [] };
  }

  // If there is cash in drawer more than the change to give
  if (totalCashInDrawer > changeDue) {
    const reversedArr = cid.reverse(); // Reverse the cash in drawer array so that we can loop it correctly in order
    const change = []; // Change to give

    // Here we round a given number to it's lowest multiple i.e changeDue = 16.74, currencyUnitValue = 5, roundNumber = 15
    const roundNumber = (changeDue, currencyUnitValue) =>
      Math.floor(changeDue / currencyUnitValue) * currencyUnitValue;

    // Loop through the reversed nested array
    for (let i = 0; i < reversedArr.length; i++) {
      const currencyUnitValue = currencyUnit[reversedArr[i][0]]; // Get the currency unit value

      // If the currency unit's value  is greater than the change to give then skip that value and got to next element
      if (currencyUnitValue > changeDue) {
        continue;
      }

      if (currencyUnitValue < changeDue) {
        const cashInDrawerUnitName = reversedArr[i][0];
        const cashInDrawerAmountForThatUnit = reversedArr[i][1];

        // If in cash in drawer amount for that unit is greater than the change to be given the we need to give it's multiple cash change
        if (cashInDrawerAmountForThatUnit > changeDue) {
          const roundChange = roundNumber(changeDue, currencyUnitValue);

          change.push([cashInDrawerUnitName, roundChange]);
          changeDue -= roundChange; // Update change to be given
          changeDue = changeDue.toFixed(2); // Limit the change to be given to 2 decimals
        } else {
          changeDue = changeDue - cashInDrawerAmountForThatUnit; // If we can give all change for that unit i.e if it is less than the change to be given then give it completely and update that change
          changeDue = changeDue.toFixed(2);
          change.push([cashInDrawerUnitName, cashInDrawerAmountForThatUnit]);
        }
      }
    }

    // If there is no change after everything or the change is still there means there are no correct funds to be given as change
    if (change.length < 1 || changeDue > 0) {
      return { status: 'INSUFFICIENT_FUNDS', change: [] };
    }
    return { status: 'OPEN', change };
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
