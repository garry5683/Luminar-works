//abac   a
//babc   b
//abbc   b


var arr = ["a", "b", "b", "c"]
var flag = 0, flag1 = 0, str = "";

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
        if (j != i) {
            if (arr[i] == arr[j]) {
                str=arr[i];
            }
        }
    }
}
console.log(str);