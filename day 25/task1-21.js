// 1. Create person object
let person = {
    name: "Pramitha",
    age: 20,
    city: "Nellore"
};

// 2. Access properties using dot notation
console.log(person.name);
console.log(person.age);
console.log(person.city);

// 3. Access properties using bracket notation
console.log(person["name"]);
console.log(person["age"]);
console.log(person["city"]);

// 4. Add new property email
person.email = "pramitha@example.com";
console.log(person);

// 5. Update city
person.city = "Hyderabad";
console.log(person.city);

// 6. Delete age
delete person.age;
console.log(person);

// 7. Loop through object
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}

// 8. Create book object
let book = {
    title: "JavaScript Basics",
    author: "John Doe",
    year: 2024
};

// 9. Nested object
person.address = { street: "MG Road", zip: 524001 };
console.log(person.address.street);

// 10. Array of objects
let students = [
    { name: "Alice", age: 18 },
    { name: "Bob", age: 19 },
    { name: "Charlie", age: 20 }
];
console.log(students[1].name);
// 11. Add greet method
person.greet = function() {
    console.log(`Hello, my name is ${this.name}`);
};
person.greet();

// 12. Calculator object
let calculator = {
    add: function(a, b) { return a + b; },
    subtract: function(a, b) { return a - b; }
};
console.log(calculator.add(5, 3));
console.log(calculator.subtract(10, 7));

// 13. isAdult method
person.age = 20;
person.isAdult = function() {
    return this.age >= 18;
};
console.log(person.isAdult());

// 14. Circle object with area method
let circle = {
    radius: 5,
    area: function() {
        return Math.PI * this.radius ** 2;
    }
};
console.log(circle.area());

// 15. book getSummary method
book.getSummary = function() {
    return `${this.title} by ${this.author}, published in ${this.year}`;
};
console.log(book.getSummary());

// 16. setName method
person.setName = function(newName) {
    this.name = newName;
};
person.setName("Madineni Pramitha");
console.log(person.name);

// 17. Log all properties in formatted string
person.logDetails = function() {
    for (let key in this) {
        if (typeof this[key] !== "function") {
            console.log(`${key}: ${this[key]}`);
        }
    }
};
person.logDetails();
// 18. Use this in greet
person.greet = function() {
    console.log(`Hello, my name is ${this.name}`);
};
person.greet();

// 19. Arrow function vs regular function
let obj = {
    name: "Test",
    regularFunc: function() { console.log(this.name); },
    arrowFunc: () => { console.log(this.name); }
};
obj.regularFunc(); // Works
obj.arrowFunc();   // Undefined (arrow doesn't bind its own this)
// 20. Nested object and this
person.job = {
    title: "Developer",
    showJob: function() {
        console.log(`Job Title: ${this.title}`);
    }
};
person.job.showJob(); // this refers to job object
// 21. Incorrect this usage with arrow
person.wrongThis = () => {
    console.log(this.name); // undefined
};
person.correctThis = function() {
    console.log(this.name);
};
person.wrongThis();
person.correctThis();
