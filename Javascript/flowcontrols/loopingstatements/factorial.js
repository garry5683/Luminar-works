var num=5,res=1,str="";
for(let i=num;i>0;i--)
{
    res=res*i;
    str+=i;
    if(i!=1){str+="*"}
}
str+=` = ${res}`;
console.log(str);
console.log(`factorial of ${num} is ${res}`);
