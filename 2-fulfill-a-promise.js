require("es6-promise");

("use strict");

const promise = new Promise((resolve, reject) => {
  resolve("FULFILLED!");
});

// does the order matters?
setTimeout(() => {
  promise.then(result => {
    console.log(result);
  });
}, 300);

/*
promise.then(result => {
  setTimeout(() => {
    console.log(result);
  }, 300);
});*/
