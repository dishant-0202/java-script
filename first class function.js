// 1. Assign a function to a variable...

const a = function() {
    console.log("Hello");
};
a();


// 2. Pass a function as an argument to another function...

function b() {
    console.log("Hello");
}

function c() {
   // calling the function passed as an argument
}

b(c);

// 3. Return a function from another function ...

function outer() {
    return function() {
        console.log("Inner function");
    };
}
const inner = outer();
inner();  // prints Inner function



