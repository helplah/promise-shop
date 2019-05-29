const promise = new Promise((resolve, reject) => {
  resolve("I FIRED");
  reject(new Error("I DID NOT FIRE"));
});

const onRejected = error => {
  console.log(error.message);
};

const onResolved = result => {
  console.log(result);
};

promise.then(onResolved, onRejected);
