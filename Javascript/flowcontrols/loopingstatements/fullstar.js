var num=5;
for(let i=1;i<=num;i++)
{
    var str=""
    for(let j=num-i;j>=1;j--)
    {
        str+=" ";
    }
    for(let q=1;q<=i;q++)
        {
            str+="*"
        }
    for(let q=1;q<i;q++)
        {
            str+="*"
        }
    console.log(str);     
}
