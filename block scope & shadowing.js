/*var a = 10;
let b = 100;
const c = 200;

function x() {
    var a = 11;
    let b = 101;              // this is block scope example...
    const c = 201;
    console.log(a);
    console.log(b);
    console.log(c);
}

x();

console.log(a);
console.log(b);
console.log(c);*/

const a = 100;

{
    const a = 200;
    console.log(a);
    {
        const a = 300;      // this is shadowing ...
        console.log(a);
    } 
    {
        const a = 400;
        console.log(a);
    }
}