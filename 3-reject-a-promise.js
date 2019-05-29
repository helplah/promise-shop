const promise = new Promise((resolve, reject) => {
  reject(new Error("REJECTED!"));
});

const onResolved = result => {
  console.log(result);
};

const onRejected = error => {
  console.log(error.message);
};

// Your solution here
setTimeout(() => {
  promise.then(onResolved, onRejected);
}, 300);
