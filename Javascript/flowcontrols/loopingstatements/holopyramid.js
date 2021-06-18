
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
        
        if(star==1 | star==row)
        str+="* "
        else if(row==num)
        str+="* "
        else 
        str+="  "
    }
    console.log(str);
}

//           OR

var num=5;
for(let row=1;row<=5;row++)
{
    let str="";
    count=1;
    for(let col=1;col<=num*2-1;col++)
    {
        if(row==num & count<=num-1)
        {
            str+="* "
            count++
        } 
        else if ((row+col==num+1) | (col-row==num-1))
        {
            str+="*"
        }
        else
        {
            if (count<5)
            str+=" "
        }
    }
    console.log(str);
}