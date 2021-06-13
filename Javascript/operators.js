console.log(10+20);//addition
console.log(10%3);
console.log(10/3);
console.log(10-2);
console.log("10+2");//concatination

var num1="10",num2="3",num3="3a",num4=10;

console.log(num1+num2);
console.log(num1-num2);
console.log(num1%num2);
console.log(num1+num3);
console.log(num1+num4);



console.log(num1/num2);
console.log(Math.floor(num1/num2));//to remove elements after the point

//relational operators

console.log(10<20);
console.log(10>20);
console.log(10<=20);
console.log(10>=20);
console.log(10!=20);
console.log(10==20);
console.log(true>false);
console.log(true<false);          //false=0,true=1
console.log(num1==num4);
console.log(num1===num4);



//logic operators




// & => and 
// | => or
// ^ => xor



//  x   y   x&y x|y x^y
//  0   1    0   1   1
//  1   1    1   1   0
//  0   0    0   0   0
//  1   0    0   1   1


console.log(2&4);
// 0010
// 0100
// 0000 => 0
console.log(2|4);   
// 0010
// 0100
// 0110 => 6
console.log(2^4);
// 0010
// 0100
// 0110 => 6