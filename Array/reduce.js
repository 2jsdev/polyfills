console.log("Polyfill of Array.reduce");

const users = [
  {
    firstName: "Bob",
    lastName: "Doe",
    age: 37,
  },
  {
    firstName: "Rita",
    lastName: "Smith",
    age: 21,
  },
  {
    firstName: "Rick",
    lastName: "Fish",
    age: 28,
  },
  {
    firstName: "Betty",
    lastName: "Bird",
    age: 44,
  },
  {
    firstName: "Joe",
    lastName: "Grover",
    age: 22,
  },
  {
    firstName: "Jill",
    lastName: "Pill",
    age: 19,
  },
  {
    firstName: "Sam",
    lastName: "Smith",
    age: 22,
  },
];

/**
 * We need an array of all full names of all users
 * but only if they are in their 20s
 * and your full name has from 10 characters onwards
 */

const isInTwenties = (user) => user.age >= 20 && user.age < 30;
const getFullName = (user) => `${user.firstName} ${user.lastName}`;
const hasTenChars = (fullName) => fullName.length >= 10;

const commonWay = users
  .filter(isInTwenties)
  .map(getFullName)
  .filter(hasTenChars);
console.log(commonWay);

const requestedUsers = users.reduce(
  (previousValue, currentValue, _currentIndex, _array) => {
    const fullName = getFullName(currentValue);
    if (isInTwenties(currentValue) && hasTenChars(fullName)) {
      previousValue.push(fullName);
    }
    return previousValue;
  },
  []
);

console.log(requestedUsers);


Array.prototype.reduce = function (callback, initialValue = null) {
  let previousValue = initialValue;
  for (let index = 0; index < this.length; index++) {
    const currentValue = this[index];
    previousValue = callback(previousValue, currentValue, index, this);
  }
  return previousValue;
};

const newRequestedUsers = users.reduce(
  (previousValue, currentValue, _currentIndex, _array) => {
    const fullName = getFullName(currentValue);
    if (isInTwenties(currentValue) && hasTenChars(fullName)) {
      previousValue.push(fullName);
    }
    return previousValue;
  },
  []
);

console.log(newRequestedUsers);
