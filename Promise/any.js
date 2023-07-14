console.log("Polyfill of Promise.any");

const promise1 = new Promise((resolve, reject) => {
  reject("TID Success");
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("TID Failed");
  }, 1000);
});

const promise3 = 10;

Promise.any([promise1, promise2])
  .then((result) => console.log(result))
  .catch((e) => console.log(e));

Promise.myAny = (values) => {
  return new Promise((resolve, reject) => {
    let counter = 0;
    const errors = [];
    for (let index = 0; index < values.length; index++) {
      Promise.resolve(values[index])
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          counter++;
          errors[index] = error;
          if (counter === values.length)
            reject(new AggregateError(errors, "All promises were rejected"));
        });
    }
  });
};

Promise.myAny([promise1, promise2, promise1])
  .then((result) => console.log(result))
  .catch((e) => console.log(e));
