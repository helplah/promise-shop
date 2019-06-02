const promise = new Promise((resolve, reject) => {
  resolve("PROMISE VALUE");
});

const onResolved = result => {
  console.log(result);
};

promise.then(onResolved, onRejected => {});

console.log("MAIN PROGRAM");
