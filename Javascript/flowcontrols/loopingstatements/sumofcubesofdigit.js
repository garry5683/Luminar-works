var num1=122
var res=0,ans=0;

while(num1!=0)
{
    res=(num1%10);
    num1=Math.floor(num1/10);
    ans=ans+res**3
}
console.log(ans);