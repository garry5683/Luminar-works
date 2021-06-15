var num=3,low=8,upp=26;

for(let i=1;i<26;i++)
{
    if((i**2>low)&(i**2<upp))
    {
        console.log(`${i}**2=${i**2}`);
    }
}