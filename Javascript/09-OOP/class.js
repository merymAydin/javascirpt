class Person{
    constructor(firstname,lastname){
        this.firstname = firstname;
        this.lastname=lastname;
    }
    getFirstName(){
        console.log(this.firstname);
    }
    getLastName(){
        console.log(this.lastname);
    }
    getFullName(){
        return `${this.firstname} ${this.lastname}`;
    }
    toString(){
        console.log(`firstname\t : ${this.firstname}\nlastname\t:${this.lastname}`)
    }
}
const person1 = new Person("akın","cengiz");
console.log(person1);
person1.getFirstName();
person1.getLastName();

const fullname = person1.getFullName();
console.log("fullaname : ",fullname);
person1.toString();



class Employee extends Person{
    constructor(firstname,lastname,salary){
        // this.firstname=firstname;
        // this.lastname=lastname;
        super(firstname,lastname);
        this.salary=salary;
    }
    getSalary(){
        console.log("Salary: ",this.salary)
    }
    toString(){
        console.log(`firstname\t : ${this.firstname}\nlastname\t: ${this.lastname}\nsalary\t:${this.salary}`);
    }
}
const Employee1 = new Employee("mete","atalay",45);
Employee1.getFirstName();
Employee1.getLastName();
const empFullName = Employee1.getFullName();
console.log(empFullName);
Employee1.toString();
Employee1.getSalary();
console.log(Employee1);