var expences=[20000,25000,27000,25000,25000,32000]
var min_exp=expences[0];
for(let exp of expences)   
{
    if(exp<min_exp)
    min_exp=exp;
}
console.log(min_exp);