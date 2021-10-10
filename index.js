// task1
let mentor = { 
    course: "JS fundamental", 
    duration: 3,
    direction: "web-development"
};

function propsCount(mentor) {
    return console.log(Object.keys(mentor).length);
};
propsCount(mentor);

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
        console.log(this.name + " " + this.surname + " " + this.midleName);
    };

    showCourse() {
          return currentYear.getFullYear() - this.year;
    }
};
 
const stud1 = new Student("Petro", "Petrenko", 2015);
console.log(stud1.showFullName("Petrovych"));
console.log("Current course: " + stud1.showCourse());
