/*let b=0;                      // this is simple loop in javascript

for(let i=1;i<=5;i++)
{
    
    b=b+i;
    
}
console.log(b);




let xyz="javascript";  // this is for of loop in java script..

let size=0;
for(let value of xyz){
    console.log("value is :" , value);
    size++;
}
console.log("string size is :" , size);






let student = {
  name: "Rahul",
  age: 20,
  course: "JavaScript"
};

for (let key in student) {
  console.log(key + " : " + student[key]);
}




for(let i=0; i<=100;i++){
    if(i%2==0){
        console.log(i);
    }
    
}




let gamenum =20;
let usernum=prompt("enter the right game number : ");

console.log(usernum);
while (usernum != gamenum ){
     usrenum=prompt("please try again : ");
}

console.log("congratulation.");







let str = "Hello";
console.log(str.charAt(1));


let a = "Hello";
let b = " World";
console.log(a.concat(b));

let str1 = "Hello";
console.log(str1.at(1));


let str2 = "         Hello  java  script";
console.log(str2.trim());



let str3 = "I like apple";
console.log(str3.replace("apple", "banana"));


let str4 = "apple apple apple";
console.log(str4.replaceAll("apple", "banana"));


let str5 = "apple,banana,orange";
console.log(str5.split(",banana,"));


let fullname=prompt("enter your full name");
let username="@"+fullname+fullname.length;
console.log(username);




let abc=["dishant","archit","as","dff","fg","erge","fgerg"];

for(let i=0;i<abc.length;i++){
    console.log(abc[i]);
}


let abcd=["dishant","archit","as","dff","fg","erge","fgerg"];

for(let i of abcd){
    console.log(i.toUpperCase());
}



let marks=[100,100,200,0,50,350];
let average=0;
let sum=0

console.log(marks.length);
for(let i of marks){
    sum=sum+i;
}
average=sum/marks.length;

console.log("average of this marks is : ", average);






let price=[100,200,300,400,500,600,700,800,900,1000];

for(let i=0;i<price.length;i++){
    let discount=price[i]/10;
    let newprice=price[i]-discount;
    price[i]=newprice;
    
}
console.log(price);






let compony=["google","microsoft","filpcart","amazon"];
console.log(compony);
compony.splice(0,1);
console.log(compony);
compony.splice(1,1,"mintra");
console.log(compony);
compony.push("flipcart");
console.log(compony);
compony.pop();
console.log(compony);




function xyz (){
    let str="dishant rudani";
    let count=0;
    for(let i=0;i<str.length;i++){
        if(str[i]==="a" || str[i]==="e" || str[i]==="i" || str[i]==="o" || str[i]==="u" ){
            count++;
            console.log(str[i]);
        }
    }
console.log("Total vowels:", count);
    
}

xyz();







const xyz = ()=>{
       let str="dishant rudani";
    let count=0;
    for(let i=0;i<str.length;i++){
        if(str[i]==="a" || str[i]==="e" || str[i]==="i" || str[i]==="o" || str[i]==="u" ){
            count++;
            console.log(str[i]);
        }
    }
console.log("Total vowels:", count);
    
}


xyz();






const marks=[94,45,56,78,90,99,89,96];

let gradea=marks.filter((val)=>{
    return val>90;
})
console.log(gradea);*/






let n=prompt("enter a number : ");
let arr=[];

for(let i=1;i<=n;i++){
    arr[i-1]=i;
}
console.log(arr);

let sum=arr.reduce((pre,curr)=>{
    return pre+curr;
})

console.log(sum);

let product=arr.reduce((pre,curr)=>{
    return pre*curr;
})

console.log(product);