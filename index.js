// task1
let mentor = { 
    course: "JS fundamental", 
    duration: 3,
    direction: "web-development"
};

function propsCount(mentor) {
    return Object.keys(mentor).length;
};
console.log(propsCount(mentor));

// task2
let worker = {
    firstName: "Ivan",
    lastName: "Petrov",
    age: 38,
    isMarried: true,
    car: "Dodge"
};

function showProps(obj) {
    let keys = Object.keys(obj);
    let values = Object.values(obj);
    console.log(keys);  
    console.log(values); 
};

showProps(worker);

// task3
const currentYear = new Date();
class Person {
    constructor (name, surname) {
        this.name = name;
        this.surname = surname;
    };
    showFullName() {
        console.log(this.name + " " + this.surname);
    };
};

class Student extends Person {
    constructor (name, surname, year) {
        super (name, surname);
        this.year = year;
    };
    
    showFullName(midleName) {
        this.midleName = midleName;
        return this.name + " " + this.surname + " " + this.midleName;
    };

    showCourse() {
        return currentYear.getFullYear() - this.year;
    }
};
 
const stud1 = new Student("Petro", "Petrenko", 2015);
console.log(stud1.showFullName("Petrovych"));
console.log("Current course: " + stud1.showCourse());

// task4
class Worker {
    _showExp = 1.2;

    constructor (fullName, dayRate, workingDays) {
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
    };

    showSalary() {
        return this.dayRate * this.workingDays;
    };

    showSalaryWithExperience() {
        return this.dayRate * this.workingDays * this._showExp;
    };

    get _showExp() {
        return this._showExp;
    };

    set _showExp(value) {
        return this._showExp = value;
    };
};

let worker1 = new Worker("John Johnson", 20, 23);
console.log(worker1.fullName);                 
console.log(worker1.showSalary());
console.log("New experience: " + worker1._showExp);
console.log(worker1.showSalaryWithExperience());
worker1._showExp = 1.5;
console.log("New experience: " + worker1._showExp);
console.log(worker1.showSalaryWithExperience());

console.log(worker1.fullName);
console.log(worker1.fullName + " salary: " + worker1.showSalary());
worker1._showExp = 1.2;
console.log("New experience: " + worker1._showExp);
console.log(worker1.fullName + " salary: " + worker1.showSalaryWithExperience());
worker1._showExp = 1.5;
console.log("New experience: " + worker1._showExp);
console.log(worker1.fullName + " salary: " + worker1.showSalaryWithExperience());

let worker2 = new Worker("Tom Tomson", 48, 22);
console.log(worker2.fullName);
console.log(worker2.fullName + " salary: " + worker2.showSalary());
worker2._showExp = 1.2;
console.log("New experience: " + worker2._showExp);
console.log(worker2.fullName + " salary: " + worker2.showSalaryWithExperience());
worker2._showExp = 1.5;
console.log("New experience: " + worker2._showExp);
console.log(worker2.fullName + " salary: " + worker2.showSalaryWithExperience());

let worker3 = new Worker("Andy Ander", 29, 23);
console.log(worker3.fullName);
console.log(worker3.fullName + " salary: " + worker3.showSalary());
worker3._showExp = 1.2;
console.log("New experience: " + worker3._showExp);
console.log(worker3.fullName + " salary: " + worker3.showSalaryWithExperience());
worker3._showExp = 1.5;
console.log("New experience: " + worker3._showExp);
console.log(worker3.fullName + " salary: " + worker3.showSalaryWithExperience());

const sortedSalary = [];

const worker1obj = {};
worker1obj.fullName = worker1.fullName;
worker1obj.salary = worker1.showSalaryWithExperience();

const worker2obj = {};
worker2obj.fullName = worker2.fullName;
worker2obj.salary = worker2.showSalaryWithExperience();

const worker3obj = {};
worker3obj.fullName = worker3.fullName;
worker3obj.salary = worker3.showSalaryWithExperience();

sortedSalary.push(worker1obj, worker2obj, worker3obj);
sortedSalary.sort(function(a, b) {
    return parseFloat(a.salary) - parseFloat(b.salary);
});

console.log("Sorted salary:");
sortedSalary.forEach(function (obj) {
    console.log(obj.fullName + ": " + obj.salary);
});

// task5
class GeometricFigure {
    getArea() {
        return 0;
    };
    
    toString() {
        return Object.getPrototypeOf(this).constructor.name;
    };
};

class Triangle extends GeometricFigure {
    constructor (a, b) {
        super();
        this.a = a;
        this.b = b;
    };

    getArea() {
        return 0.5 * this.a * this.b;
   };
};

class Square extends GeometricFigure {
    constructor (r) {
        super();
        this.r = r;
    };

    getArea() {
        return this.r ** 2;
   };
};

class Circle extends GeometricFigure {
    constructor (r) {
        super();
        this.r = r;
    };

    getArea() {
        return Math.PI * this.r ** 2;
   };
};

function handleFigures (figures) {
    let arr = [];
    figures.forEach(function (obj) {
        console.log("Geometric figure: " + obj.toString() + " - area: " + obj.getArea());
        arr.push(obj.getArea());
    });
    let total = arr.reduce(function(a, b) {return a + b});
    console.log(total);
};

const figures = [new Triangle(4, 5), new Square(7), new Circle(5)];
console.log(handleFigures(figures));
