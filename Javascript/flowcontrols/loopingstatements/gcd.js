var a=98,b=56

while(true)
{
    if(a==0)
    {
        console.log(b);
        break
    }
    else if(b==0)
    {
        console.log(a);
        break        
    }
    else if(a==b)
    {
        console.log(a);
        break
    }
    else if(a>b)
    {
        a=a-b
    }
    else
    {
        b=b-a
    }
}
