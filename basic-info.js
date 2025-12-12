//  function statement   or    function declaration...

function a() {
    let x = 10;
    console.log(x);
}
a();


//  function expression ...

var b = function () {
    let x = 20; // only one difference between function statement or function declaration and function expression  is hoisting...
    console.log(x); // call function more creation of function is give error in function expression but not in function statement or function declaration...
} //this is small difference...
b();


//  aninymous function ...

setTimeout(function() {
    console.log("Hi");               ////  function without name is called aninymous function...
}, 1000);
       
   


//  named function expression ...

var b = function a() {
    let x = 20;
    console.log(x); // give name in function expression is called named function expression...
}
b();

//  difference between paremeter and arguments ...

//parameter = The variable name used in a function definition.
function add(a, b) { // a and b are PARAMETERS
    console.log(a + b);
}
//a and b are a parameters...

//argument = The actual value passed to a function when calling it.
add(x, y);

// x and y are arguments...

