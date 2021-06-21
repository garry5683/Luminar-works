
//object   => key/value pairs 


var expens={jan:10000,feb:15000,march:22000,april:23000,may:20000}

console.log(expens.march);
console.log(expens["march"]);

expens["june"]=25000
console.log(expens);

expens.march+=3000;
console.log(expens);
//check if july is present 
console.log("july" in expens);


//check for july is present if not add june:25000
if ("july" in expens){ 

}
else{
    expens.july=25000;
}
console.log(expens);
//      or
//if (!("july" in expens)){
//    expens.july=25000;
//}
//console.log(expens);