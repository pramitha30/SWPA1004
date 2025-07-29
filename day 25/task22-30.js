// 22. Constructor Function
function Car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
}

// 23. Prototype method
Car.prototype.getDetails = function() {
    return `${this.brand} ${this.model} (${this.year})`;
};

let car1 = new Car("Toyota", "Camry", 2023);
let car2 = new Car("Tesla", "Model 3", 2024);

// 24. Add mileage property to one object
car1.mileage = 15000;

// 25. Prototype method honk()
Car.prototype.honk = function() {
    console.log(`${this.brand} says Beep Beep!`);
};

console.log(car1.getDetails());
console.log(car2.getDetails());
car1.honk();
car2.honk();

// 26. isNew method
Car.prototype.isNew = function() {
    return this.year >= 2022;
};
console.log(car1.isNew());
console.log(car2.isNew());
// 27. Student class
class Student {
    constructor(name, roll, grade) {
        this.name = name;
        this.roll = roll;
        this.grade = grade;
    }

    // 28. Method getDetails
    getDetails() {
        return `${this.name} (Roll: ${this.roll}) - Grade: ${this.grade}`;
    }
}

// 29. Create 2 instances
let s1 = new Student("Alice", 1, "A");
let s2 = new Student("Bob", 2, "B");
console.log(s1.getDetails());
console.log(s2.getDetails());

// 30. Extend Student
class GraduateStudent extends Student {
    constructor(name, roll, grade, degree) {
        super(name, roll, grade);
        this.degree = degree;
    }

    getDegree() {
        return `${this.name} has a degree in ${this.degree}`;
    }
}

let gs1 = new GraduateStudent("Charlie", 3, "A+", "Computer Science");
console.log(gs1.getDetails());
console.log(gs1.getDegree());
