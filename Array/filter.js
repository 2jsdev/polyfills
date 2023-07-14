console.log("Polyfill of Array.filter");

// filter
const originalArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const newArray = originalArray.filter(
  (value, _index, _array) => value % 2 === 0
);
console.log(newArray);

// My filter
Array.prototype.filter = function (callback) {
  if (this == null) {
    throw new TypeError("Cannot convert to null or undefined object");
  }

  if (typeof callback !== "function") {
    throw new TypeError(callback + " not a function");
  }

  const result = [];

  for (let index = 0; index < this.length; index++) {
    const value = this[index];
    if (callback(value, index, this)) result.push(value);
  }
  return result;
};

const finalArray = originalArray.filter(
  (value, _index, _array) => value % 2 === 0
);
console.log(finalArray);