var products = [
    [100, "ricepowder", 30, 10],
    [101, "oreo", 35, 100],
    [102, "darkfantacy", 40, 50],
    [103, "fifty", 20, 5],
    [104, "horlicks", 200, 5],
    [105, "complan", 190, 0],
    [106, "boost", 250, 10],
    [107, "item1", 5, 10],
]
var items = 0;
var rate = 0


// print number of product in this shop 8
console.log(products.length);



// print number of product in stock 7
for (let prod of products) {
    if (prod[3] != 0) {
        items += 1
    }
}
console.log(items);



// print costly product boost
for (let prod of products) {
    if (prod[2] >= rate) {
        rate = prod[2];
        item = prod[1];
    }
} console.log(item);



// print low_cost product item1
for (let prod of products) {
    if (prod[2] <= rate) {
        rate = prod[2];
        item = prod[1];
    }

} console.log(item);



// is there any item available under rs 10 ? true
var flag = 0;
for (let prod of products) {
    if (prod[2] < 10) {
        flag = 1
    }
}
if (flag != 0) {
    console.log("true");
}
else {
    console.log("false");
}



// print deatils of boost
for (let prod of products) {
    if (prod[1] == "boost") {
        console.log(prod);
    }
}
