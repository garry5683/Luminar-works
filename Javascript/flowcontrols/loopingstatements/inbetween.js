var num=3,low=8,upp=26,res=0;

for(let i=1;i<=upp;i++)
{
    res=i**num;
    if((res>=low)&(res<=upp))
    {
        console.log(`${i}**${num}=${res}`);
    }
}