var products=[
    {code:1000,name:"garlic",mrp:120,aval_qty:10},
    {code:1001,name:"chilly",mrp:80,aval_qty:5},
    {code:1002,name:"tomatto",mrp:35,aval_qty:20},
    {code:1003,name:"onion",mrp:40,aval_qty:37},
    {code:1004,name:"potatto",mrp:45,aval_qty:40},
    {code:1005,name:"banana",mrp:55,aval_qty:60},
    {code:1006,name:"brinjal",mrp:43,aval_qty:2},
    {code:1007,name:"beetroot",mrp:38,aval_qty:5},
    {code:1008,name:"carrot",mrp:60,aval_qty:0},
    {code:1009,name:"bittergod",mrp:50,aval_qty:5},
    ] 

//array of objects

var product_names=products.map(item=>item.name)
console.log(product_names);
console.log("\n");
//       OR
////regular method
// var product_names=[]
// for(let item of products){
//     product_names.push(item.name)
// }
// console.log(product_names);


//print all products in upper case
var product_nameupp=products.map(item=>item.name.toUpperCase())
console.log(product_nameupp);
console.log("\n");



//print all products whose mrp<50
var below_fifty=products.filter(item=>item.mrp<50)
console.log(below_fifty);
console.log("\n");


//print out of stock items   ->  avl_qty==0
var available_qty=products.filter(item=>item.aval_qty==0)
console.log(available_qty);
console.log("\n");


//print stock items less tham 10  ->  avl_qty<10
var qty_10=products.filter(item=>item.aval_qty<10)
console.log(qty_10);
console.log("\n");


//print products in range of 50 to 100 price
var rangeof=products.filter(item=>item.mrp>50 & item.mrp<100)
console.log(rangeof);
console.log("\n")


//print items starting with b
var name_with_B=products.filter(item=>item.name[0]=="b")
console.log(name_with_B);
console.log("\n")


//products after available items - 5
var items=products.filter(item=>item.aval_qty-5>0)
console.log(items);
console.log("\n")



//if mrp>55 add offer of 5% ,mrp<50 add offer 0%
// products.map(item=>item.mrp>50? item["offer"]="5":item["offer"]="0")
// console.log(products);
// console.log("\n")
//              OR
var offer =products.map(item=>item.mrp>50?item.offer="5%":item.offer="0%")
console.log(products);
console.log("\n")



//costly product
var costly=products.reduce((item1,item2)=>item1.mrp>item2.mrp?item1:item2)
console.log(costly);
console.log("\n")


//lowest product
var lowest=products.reduce((item1,item2)=>item1.mrp>item2.mrp?item2:item1)
console.log(lowest);
console.log("\n");


//search for carrot
var product_details=products.find(item=>item.name=="carrot");
console.log(product_details);
console.log("\n");


// find wheather an element is prsent or not 
var is_available=products.some(item=>item.mrp<20)
console.log(is_available);
var is_available=products.some(item=>item.mrp<50)
console.log(is_available);
var is_available=products.some(item=>item.mrp>30 & item.mrp<50)
console.log(is_available);