//polymorphism
//more than one form
//1)methodoverloading

//some method name ,different number parameters

class Calculation{
    add(){
        console.log("inside no arg method");
    }
    add(num1){
        console.log("inside one arg method");
    }
    add(num1,num2){
        console.log("this two arg method");
    }
}

var calc=new Calculation();
calc.add();
calc.add(10);
calc.add(10,20);