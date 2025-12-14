// Original array
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Filter even numbers
function a(x){
    return x%2==0;
}
let even = arr.filter(a);

// Filter odd numbers
function b(x){
    return x%2!==0;
}
let odd = arr.filter(b);

// Output
console.log("Original array:", arr);
console.log("Even numbers :", even);
console.log("Odd numbers  :", odd);






const users = [
  { firstName: "dishant", lastName: "rudani", age: 19 },
  { firstName: "abhi", lastName: "mangukiya", age: 20 },
  { firstName: "viral", lastName: "savaliya", age: 23 },
  { firstName: "archit", lastName: "rudani", age: 23 }
];



const output = users.filter((x)=>x.age>20).map((x)=>x.firstName );

console.log(output);