
let items = [
    {name : "Virat", age: 36, address: {state: "MH", city: "MBI"}},
    {name : "Raj", age: 37},
    {name : "Sachin", age: 38, address: {state: "KA", city: "BLR"}}
]

items.forEach( (item, index) => {
    console.log(`Name = ${item?.name}, Age = ${item?.age},`);
    console.log(`State = ${item.address?.state}, City = ${item.address?.city}`);
    console.log("-----------------------------");
});

function Customer(name, phone) {
    this.name = name;
    this.phone = phone;
}
Customer.prototype.display = function() {
    console.log(`Name = ${this.name}, Phone = ${this.phone}`);
}
let c1 = new Customer("Sachin", 999393);
c1.display();
// classes would simplify object creation & adding functions to it
class Employee { 
    constructor(id, name, salary) {
        this.id = id;   this.name = name;   this.salary = salary;
    }
    printInfo() {
        console.log(`Id = ${this.id}, Name = ${this.name}, Salary = ${this.salary}`)
    }
}
let e1 = new Employee(123, "Sourav", 52000);
let e2 = new Employee(456, "Virat", 88000);
e1.printInfo();
e2.printInfo();

class A {
    display() {
        console.log("display() inside A");
    }
}
class B extends A { 
    display() {
        console.log("display() inside B");
    }
}
console.log("-----------");
let a = new A();
a.display();
let b = new B();
b.display();

// another example of inheritance
class P {
    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
    }
    print() {
        console.log('---Person Information---');
        console.log(`Name = ${this.name}, Gender = ${this.gender}`)
    }
}
// using class E like Employee
class E extends P { 
    constructor(id, name, gender, salary) {
        super(name, gender); // P -> constructor(name, gender)
        this.id = id;
        this.salary = salary;
    }
    print() {
        console.log("----Employee Information-----");
        console.log(`Name = ${this.name}, Id = ${this.id}, Gender = ${this.gender}, Salary = ${this.salary}`)
    }
}
let p = new P("Rajesh", "Male");
p.print();
let e = new E(123, "Vijay", "Male", 30000);
e.print(); 
