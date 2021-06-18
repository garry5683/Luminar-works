function add(...ar){ //to give multiple no.of elements
    let total=0;
    for (let num of ar){
        total+=num;
    }
    return total
}


console.log(add(10,20));
console.log(add(10,20,30));
console.log(add(10,20,30,40));
