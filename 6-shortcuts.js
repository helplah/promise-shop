const promise = Promise.reject(new Error("Fake news"));

promise.catch(err => {
  console.log("THERE IS AN ERROR!");
  console.log(err.message);
});

// promise.resolve("Secret Value");
