console.log("Polyfill of Array.map");

// map
const originalArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const newArray = originalArray.map((value, _index, _array) => value * 2);
console.log(newArray);

// My map
Array.prototype.map = function (callback) {
  if (this == null) {
    throw new TypeError("Cannot convert to null or undefined object");
  }

  if (typeof callback !== "function") {
    throw new TypeError(callback + " not a function");
  }

  const result = [];

  for (let index = 0; index < this.length; index++) {
    const value = this[index];
    const transformedValue = callback(value, index, this);
    result.push(transformedValue);
  }
  return result;
};

const finalArray = originalArray.map((value, _index, _array) => value * 2);
console.log(finalArray);
