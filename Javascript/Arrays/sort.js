var arr=[10,13,12,11,17,15,2000,3,18]

//arr.sort()         //for sorting using first digit

arr.sort((num1,num2)=>num1-num2)    //asending order sorting
console.log(arr);
arr.sort((num1,num2)=>num2-num1)     //desending order sorting
console.log(arr);