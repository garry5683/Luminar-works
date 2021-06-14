var num1=123
var res=0

while(num1!=0)
{
    res=(res*10)+(num1%10);
    num1=Math.floor(num1/10);
}
console.log(res);


//var num=123
//var res=""
//while(num!=0)
//  {
//      let digit=num%10;
//      res+=digit
//      num=math.floor(num/10)
//  }
//console.log(res);

