/*let arr = [1, 2, 3, 4, 5];

function a(sum , curr){
    return sum=sum+curr;
}
let sum = arr.reduce(a);

console.log("Sum:", sum);



const output = arr.reduce(function(acc,curr){
return acc=acc+curr;
},0);

console.log("sum :",output)


const abc =[1,2,3,4,5];

const output2 = arr.reduce(function(max,curr){
   if(max<curr){
    max=curr;
    return max;
   }   
},0);


console.log("max :",output2)



const users = [
  { firstName: "dishant", lastName: "rudani", age: 19 },
  { firstName: "abhi", lastName: "mangukiya", age: 20 },
  { firstName: "viral", lastName: "savaliya", age: 23 },
  { firstName: "archit", lastName: "rudani", age: 23 }
];



const output3 = users.reduce(function(acc , curr){
if(acc[curr.age]){
   acc[curr.age]=++acc[curr.age];
}
else{
    acc[curr.age]=1;
}
return acc;
},{ });

console.log(output3)*/





const users = [
  { firstName: "dishant", lastName: "rudani", age: 19 },
  { firstName: "abhi", lastName: "mangukiya", age: 20 },
  { firstName: "viral", lastName: "savaliya", age: 23 },
  { firstName: "archit", lastName: "rudani", age: 23 }
];

const output4 = users.reduce(function (acc, curr) {
    if (curr.age > 20) {
        acc.push(curr.firstName + " " + curr.lastName);
    }
    return acc;
}, []);

console.log(output4);
