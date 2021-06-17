var expences=[30000,25000,27000,25000,25000,32000]
var totalexp=0;
//console.log(expences[1]);

//expences[4]+=2000;
//console.log(expences);

//for(let i=0;i<expences.length;i++)
//{
//    console.log(expences[i]);
//}
//           OR
//for(let exp of expences)    //exp is the index value
//{
//    console.log(exp);
//    totalexp+=exp
//}
//console.log("total expences=",totalexp);



//print all exp>25000

//for(let exp of expences)   
//{
//    if(exp>25000)
//    console.log(exp);
//}


//print the count of expences greater than 25000

//var count=0;
//for(let exp of expences)   
//{
//    if(exp>25000)
//    count+=1 
//}
//console.log(count);
//       OR
//var count=expences.filter(exp=>exp>25000).length
//console.log(count);

//highest expence
var max_exp=0;
for(let exp of expences)   
{
    if(exp>max_exp)
    max_exp=exp;
}
console.log(max_exp);

//           OR

var high=expences.reduce((exp1,exp2)=>exp1>exp2?exp1:exp2)
console.log(high);