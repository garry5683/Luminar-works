//inheritance
//parent =>child
//base=>derived
//super=>sub


// class Parent{
//     Phone(){
//         console.log("Samsung");
//     }
// }
// class Child extends Parent{

// }
// var obj=new Child();
// obj.Phone();

class Parent{
    m1(){
        console.log("inside m1 method");
    }
}
class Child extends Parent{
    m2(){
        console.log("inside m2 method");
    }
}
class Subchild extends Child{
    m3(){
        console.log("inside m3 method");
    }
}

var obj= new Subchild();
obj.m3()
obj.m2()
obj.m1()