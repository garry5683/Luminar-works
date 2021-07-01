// array methods map(),filter(),reduce(),sort(),find(),sum(),foreach()


// //arrow function
// let add=(num1,num2)=> num1+num2;

// let sub=(num1,num2)=>num1-num2;

// let cube=num=>num**3

// //(parm1,parm2,....parmn)=>return statement;
// console.log(add(10,20));
// console.log(sub(50,10));
// console.log(cube(3));

// //odd or even
// var num_chk=num=>num%2==0?"even":"odd";
// console.log(num_chk(7));
// console.log(num_chk(16));




//map()
var arr=[1,5,6,7,3,4]
 
var squares=arr.map(num=>num**2)
console.log(squares);

var cubes=arr.map(num=>num**3)
console.log(cubes);


//filter()
//print all even numbers
var even=arr.filter(num=>num%2==0)
console.log(even);


//reduce
//print sum of arrays
var sum =arr.reduce((num1,num2)=>num1+num2);
console.log(sum);
//max element 
var max=arr.reduce((num1,num2)=>num1>num2?num1:num2)
console.log(max);
//min element
var min=arr.reduce((num1,num2)=>num1>num2?num2:num1)
console.log(min);


//find()
//search for an element 
var srch=arr.find(num=>num=="5");
console.log(srch);
var srch=arr.find(num=>num=="100");
console.log(srch)


//some()             returns boolean values true or false
var is_available=arr.some(num=>num==5)
console.log(is_available);
var is_available=arr.some(num=>num>5)
console.log(is_available);


//foreach()
var array=[10,20,30,40]
for(let num of array){
    console.log(num);
}

