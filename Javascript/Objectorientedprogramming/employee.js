class Employee{
    
    constructor(id,name,designation,salary,experience){
        this.emp_id=id;
        this.emp_name=name;
        this.emp_desig=designation;
        this.emp_salary=salary;
        this.emp_exp=experience;
    }
    printEmployee(){
        console.log(this.emp_id,this.emp_name,this.emp_desig,this.emp_salary,this.emp_exp);
    }

}
//create 5 employees
var emp1=new Employee(101,"Garry","quality analyst",25000,3)
emp1.printEmployee()
var emp2=new Employee(102,"Sebin","Project Manager",26000,2)
emp2.printEmployee()
var emp3=new Employee(103,"Richi","Network administrator",19000,3)
emp3.printEmployee()
var emp4=new Employee(104,"Spate","Hardware Technician",17000,4)
emp4.printEmployee()
var emp5=new Employee(105,"Irfan","Business Analyst",22000,6)
emp5.printEmployee()

//print highest salaried employee
employees=[]
employees.push(emp1,emp2,emp3,emp4,emp5)
let highemp=employees.reduce((em1,em2)=>em1.emp_salary>em2.emp_salary?em1:em2)
console.log(highemp);

//sort employees according with experience
employees=[]
employees.push(emp1,emp2,emp3,emp4,emp5)
let highexp=employees.reduce((em1,em2)=>em1.emp_exp>em2.emp_exp?em1:em2)
console.log(highexp)

//check is there any employee working as qa
employees=[]
employees.push(emp1,emp2,emp3,emp4,emp5)
let empqa=employees.filter((em1)=>em1.emp_desig=="quality analyst")
console.log(empqa)
