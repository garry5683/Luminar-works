var num=17;
var flag=0;

for(i=2;num>i;i++)
{
    if(num%i==0)
    {
        flag=1;
        break;
    }
}
console.log(flag==0?"Prime Number":"Not Prime Number");