// Fill in the object constructor with the following methods below:

// getFirstName() getLastName() getFullName() setFirstName(first) setLastName(last) setFullName(firstAndLast)
// Run the tests to see the expected output for each method.

// The methods that take an argument must accept only one argument and it has to be a string.

// These methods must be the only available means of interacting with the object.

let Person = function(firstAndLast) {
  let fullName = firstAndLast;

  this.getFirstName = () => fullName.split(' ')[0];

  this.getLastName = () => fullName.split(' ')[1];

  this.getFullName = () => fullName;

  this.setFirstName = first =>
    (fullName = `${first} ${fullName.split(' ')[1]}`);

  this.setLastName = last => (fullName = `${fullName.split(' ')[0]} ${last}`);

  this.setFullName = name => (fullName = name);
};

let bob = new Person('Bob Ross');
console.log(bob instanceof Person);
console.log(Object.keys(bob).length);
console.log(bob.firstName);
console.log(bob.lastName);

console.log(bob.getFirstName());
console.log(bob.getLastName());
console.log(bob.getFullName());
