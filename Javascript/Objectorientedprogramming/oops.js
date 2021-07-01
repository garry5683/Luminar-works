//class-plan,design pattern,blue print,template
//object-real world entity
//reference-



// class person{
//     setPerson(nme,ag){
//         this.name=nme
//         this.age=ag
//     }
//     printPerson(){
//         console.log(this.name,this.age);
//     }
// }

// var obj=new person()

// obj.setPerson("ajay",27)
// obj.printPerson()

// var obj1=new person()
// obj1.setPerson("ram",25)
// obj1.printPerson()


class Student{

// this is a keyword used to point current class instance variables

//setStudent is used for initializing instance variables
//constructer initializing instznce vzriables
//constructor name always same as classname in java and c++ in python (_init_)

//in javascript constructor name is always constructor()

//consturctor automatically invoked during object creation
             //using constructor
constructor(ro,name,course,total){
    this.roll_no=ro;
    this.name=name;
    this.course=course;
    this.total=total;
}

    printStudent(){
        console.log(this.roll_no,this.name,this.course,this.total);
    }
}
var obj=new Student(100,"nithin","mean",25000)
var obj2=new Student(100,"nin","mean",25000)
obj.printStudent()
obj2.printStudent()
//  //            OR(without constructor)
//     class Student{
//     setStudent(roll,nme,cou,tot){
//         this.roll_no=roll
//         this.name=nme
//         this.course=cou
//         this.total=tot
//     }
//     printStudent(){
//         console.log(this.roll_no,this.name,this.course,this.total);
//     }
// }
// var obj=new Student
// obj.setStudent(1,"garry","mean stack",35000)

