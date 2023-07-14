console.log("Polyfill of Promise.race");

const promise1 = new Promise((resolve, reject) => {
  resolve("TID Success");
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("TID Failed");
  }, 1000);
});

Promise.race([promise1, promise2]).then((value) => {
  console.log(value);
});

Promise.race = (values) => {
  return new Promise((resolve, reject) => {
    for (let index = 0; index < values.length; index++) {
      Promise.resolve(values[index])
        .then((data) => resolve(data))
        .catch((e) => reject(e));
    }
  });
};

Promise.race([promise1, promise2]).then((value) => {
  console.log(value);
});
