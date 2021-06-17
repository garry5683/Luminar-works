
var num=5;
for(let row=1;row<=num;row++)
{
    let str="";
    for(let space=num-row;space>=1;space--)
    {
        str+=" "
    }
    for(let star=1;star<=row;star++)
    {
        str+="* "
    }
    console.log(str);
}