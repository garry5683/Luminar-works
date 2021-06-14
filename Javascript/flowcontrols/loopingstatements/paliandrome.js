var num=121
var num1=num
var res=0

while(num1!=0)
{
    res=(res*10)+(num1%10);
    num1=Math.floor(num1/10);
}
console.log(num==res?"palandrome":"not paliandrome");
//if(num==res)
//{
//    console.log("paliandrome");
//}
//else
//{
//    console.log("not paliandrome");
//}
