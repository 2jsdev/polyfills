console.log("Polyfill of Promise.all");

// Promise

// 1 fulfilled
// 2 pending
// 3 rejected

const promise1 = new Promise((resolve, reject) => {
  resolve("TID Success");
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("TID Failed");
  }, 1000);
});

Promise.all([promise1, promise2])
  .then((result) => console.log(result))
  .catch((e) => console.log(e));

Promise.all = (values) => {
  return new Promise((resolve, reject) => {
    const results = [];
    let counter = 0;
    for (let index = 0; index < values.length; index++) {
      Promise.resolve(values[index])
        .then((data) => {
          results[index] = data;
          counter++;
          if (counter === values.length) {
            resolve(results);
          }
        })
        .catch((e) => {
          reject(e);
        });
    }
  });
};

Promise.all([promise1, promise2, 10])
  .then((result) => console.log(result))
  .catch((e) => console.log(e));
