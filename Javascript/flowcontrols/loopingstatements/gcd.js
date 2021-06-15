var a=56,b=98

//while(true)     
//{
//    if(a==0)
//    {
//        console.log(b);
//        break
//    }
//    else if(b==0)
//    {
//        console.log(a);
//        break        
//    }
//    else if(a==b)
//    {
//        console.log(a);
//        break
//    }
//    else if(a>b)
//    {
//        a=a-b
//    }
//    else
//    {
//        b=b-a
//    }
//}

var factor=0
for(let i=1;i<a;i++)
{
    if(a%i==0 & b%i==0)
    {
        factor=i
    }
}
console.log(factor);