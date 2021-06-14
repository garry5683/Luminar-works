var num=10;
var num1=1,res=1,pre=0,d=0;

while(num1<=num)
{
if(num1==1)
{
    console.log(pre);
}
if(num1==2)
{
    console.log(res);
}
if(num1>2)
{
    d=res+pre
    pre=res
    res=d
    console.log(d);  
}
num1+=1
}