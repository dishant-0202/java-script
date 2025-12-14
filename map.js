// Original array
let arr = [1, 2, 3, 4, 5];


function a(x){
    return x *2;
}
// Double values
let double = arr.map(a);

function b(x){
    return x *3;
}

// Triple values
let triple = arr.map(b);

function c(x){
    return  x % 2 === 0;
}

// Boolean values (check if number is even)
let boolean = arr.map(c);

// Output
console.log("Original array:", arr);
console.log("Double values :", double);
console.log("Triple values :", triple);
console.log("Boolean values:", boolean);





const users = [
  { firstName: "dishant", lastName: "rudani", age: 19 },
  { firstName: "abhi", lastName: "mangukiya", age: 20 },
  { firstName: "viral", lastName: "savaliya", age: 23 },
  { firstName: "archit", lastName: "rudani", age: 23 }
];



const output = users.map(x => x.firstName + " " + x.lastName);

console.log(output);
