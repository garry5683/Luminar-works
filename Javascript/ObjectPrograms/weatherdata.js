var temperature = [
    { district: "tvm", temprature: 25 },
    { district: "kollam", temprature: 27 },
    { district: "kottayam", temprature: 24 },
    { district: "ekm", temprature: 27 },
    { district: "tsr", temprature: 25 },
    { district: "pkd", temprature: 30 },
    { district: "tvm", temprature: 27 },
    { district: "kollam", temprature: 25 },
    { district: "kottayam", temprature: 28 },
    { district: "ekm", temprature: 29 },
    { district: "tsr", temprature: 32 },
    { district: "pkd", temprature: 31 },

]

//district:highest temp
//tvm:27,kollam:27,kottayam:28,ekm:20,tsr:32,pkd:31
var weather = {}
for (let data of temperature) {
    let dist = data["district"];
    let temp = data["temprature"];

    if (dist in weather) {
        let old_temp = weather[dist]
        if (old_temp < temp) {
            weather[dist] = temp
        }
    }
    else {
        weather[dist] = temp
    }
}
console.log(weather);
console.log("\n");


// sort in descending order of temperature

var sort=[]
for(var data in weather){
    sort.push([data,weather[data]]);
}
sort.sort(function(a,b){return b[1]-a[1]});
console.log(sort);
console.log("\n");



//find dist with highest temp 
console.log(sort[0]);
//       OR
var temp=0,dist="";
for(let data of temperature){
   if(data.temprature>temp){
       temp=data.temprature;
       dist=data.district
   }
}
console.log(dist+":"+temp);
console.log("\n");
