//two classes
class Parent{
    bike(){
        console.log("passion pro");
    }
    phone(){
        console.log("samsung");
    }
}
class Child extends Parent{
    phone(){
        console.log("iphone");
    }
    bike(){
        console.log("re350");
    }
}
var child=new Child()
child.phone()
child.bike()