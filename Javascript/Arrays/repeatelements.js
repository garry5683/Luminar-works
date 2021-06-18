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