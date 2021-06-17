var array1 = [1, 2, 3, 4], element = 6;

//var a = 0, b = 0, count = 0;
//for (let arr of array1)
//{
//    for (let arr1 of array1)
//    {
//        if(arr1+arr==element & arr!=arr1)
//        {
//            console.log("pair",arr,arr1);
//        }
//        count+=1
//    }
//}   
//console.log(count);               //count is 16



//               OR


//var arr=[1,2,3,4]
//var element=6;
//var count=0
//
//for(let i=0;i<array1.length;i++){
//    for(let j=i+1;j<array1.length;j++){
//        let total=array1[i]+array1[j];
//
//        if(element==total){
//            console.log("pairs",array1[i],array1[j]);
//        }
//        count++;
//    }
//}
//console.log(count);         //count=6


//               OR
var low = 0, upp = array1.length - 1,count=1;

while (low < upp) {
    let total = array1[low] + array1[upp];

    if (element == total) {
        console.log(array1[low], array1[upp]);
        low++;
    }
    else if (element > total) {
        low++;
    }

    else if (element < total) {
        upp--;
    }
    count++;
}
console.log(count);     //count=4
