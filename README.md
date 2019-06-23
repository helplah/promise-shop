# promise-shop

Node school https://github.com/stevekane/promise-it-wont-hurt

Teaches how to use ES6 Promise and async/await

Type `promise-it-wont-hurt` into the terminal to run it

**Exercise 8**
This is failing because the workshopper enforces an assumption that the name of the function passed to your first then() call will be 'attachTitle' (it uses the name property of the function to determine this). In your case, you are using an anonymous function expression and assigning to a variable named attachTitle, so the 'name' property will be empty. You should be able to fix this with a function declaration or named function expression:

https://github.com/stevekane/promise-it-wont-hurt/issues/110

// function declaration
function attachTitle(word) {
return 'DR. ' + word;
}

// named function expression
var attachTitle = function attachTitle(word) {
return 'DR. ' + word;
}
