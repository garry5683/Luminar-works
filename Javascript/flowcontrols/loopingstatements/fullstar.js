var num=5,k=0;
for(let i=num;i>0;i--)
{
    var str=""
    for(let j=1;j<i;j++)
    {
        str+=" ";
    }
    k=k+1;
    for(let q=1;q<=k;q++)
        {
            str+="*"
        }
    for(let q=1;q<k;q++)
        {
            str+="*"
        }
    console.log(str);     
}
