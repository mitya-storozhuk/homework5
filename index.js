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
    let values = Object.values(obj)
    console.log(keys);  
    console.log(values); 
};

showProps(worker);
