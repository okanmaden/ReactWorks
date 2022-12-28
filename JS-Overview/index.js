// var can be function and global scope

// console.log (greeter);
// var greeter = "say hello"

// var greeter;
// console.log(greeter); // greeter is undefined
// greeter = "say hello"


//hoisting
// var greeter = "say hi"
// console.log(greeter)

// let is block scope

// let greeting = "say Hi";
// greeting = "say Hello instead";

// Just like var,  a variable declared with let can be updated within its scope. Unlike var, 
// a let variable cannot be re-declared within its scope. So while this will work:

// let greeting = "say Hi";
// let greeting = "say Hello instead"; // error: Identifier 'greeting' has already been declared

// var hello = "hello"
// console.log(hello)
// var hello = "mello"
// console.log(hello)

// let world;
// world = "world"
// console.log(world)

// const block scoped, const cannot be updated or re-declared
// const greeting = "say Hi";
// greeting = "say Hello instead";// error: Assignment to constant variable. 

// const greeting = "say Hi";
// const greeting = "say Hello instead";// error: Identifier 'greeting' has already been declared
// This behavior is somehow different when it comes to objects declared with const.
//  While a const object cannot be updated, the properties of this objects can be updated. 
//  Therefore, if we declare a const object as this:

//     const greeting = {
//         message: "say Hi",
//         times: 4
//     }
// // while we cannot do this:

//     greeting = {
//         words: "Hello",
//         number: "five"
//     } // error:  Assignment to constant variable.
// // we can do this:

//     greeting.message = "say Hello instead";
// // This will update the value of greeting.message without returning errors.

