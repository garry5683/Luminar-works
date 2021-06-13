var num1=15;


if(num1%15==0)
{
    console.log("FIZBUZZ");
}
else if(num1%5==0)
{
    console.log("BUZZ");
}
else if(num%3==0)
{
    console.log("FIZ");
}
else
{
    console.log("invalid number");
}





//          OR
var res="";

if(num1%3==0)
{
    res+="FIZ";
}
if(num1%5==0)
{
    res+="BUZZ"
}
console.log(res);

