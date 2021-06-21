var arr1=[10,20,30,40]
var arr2=[10,11,20,28]

//common elements of the two arrays

function pos(array1,array2){
    for(let ar1 of array1){
        for (let ar2 of array2){
            if (ar1 == ar2)
            {
                console.log(ar1);
            }
        }
    }
}
    pos(arr1,arr2);



    var arr=[10,7,11,8,12,9]

arr.sort((num1,num2)=>num1-num2)
var element=10;
let flag=0;
var low=0,upp=arr.length-1;
while(low<=upp){
    let mid= Math.floor((low+upp)/2)

    if(element>arr[mid]){
        low=mid+1;
    }
    else if(element<arr[mid]){
        upp=mid-1
    }
    else if(element == arr[mid]){
        flag++;
        break;
    }
}
console.log(flag==0?"not found":"found");