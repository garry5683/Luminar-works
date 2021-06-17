var arr=[4,5,6]    //4,5,6=8,7,9,    //5,3,6,=9,11,8
var total=0;


for(let num of arr)   
{
        total+=num;
}
//for (let num of arr)
//{
//console.log(total-num);
//}

//        OR

op=[]
for(let num of arr){
        op.push(total-num)      //to push elements into an array 
}
console.log(op);