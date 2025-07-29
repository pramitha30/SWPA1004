// 16. sum(a, b)
function sum(a, b) {
    return a + b;
}
console.log(sum(4, 7));

// 17. name and favorite color
function favColor(name, color) {
    return `${name}'s favorite color is ${color}.`;
}
console.log(favColor("Pramitha", "Blue"));

// 18. average of 3 numbers
function average(a, b, c) {
    return (a + b + c) / 3;
}
console.log(average(3, 6, 9));

// 19. repeat string
function repeatString(str, times) {
    return str.repeat(times);
}
console.log(repeatString("Hi ", 3));

// 20. array length
function arrayLength(arr) {
    return arr.length;
}
console.log(arrayLength([1, 2, 3, 4, 5]));
// 21. full name
function getFullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}
console.log(getFullName("Pramitha", "Madineni"));

// 22. largest of 3 numbers
function largestOfThree(a, b, c) {
    return Math.max(a, b, c);
}
console.log(largestOfThree(5, 9, 3));

// 23. multiplyOrAdd
function multiplyOrAdd(a, b, operation) {
    if (operation === "multiply") return a * b;
    if (operation === "add") return a + b;
    return "Invalid operation";
}
console.log(multiplyOrAdd(5, 3, "multiply"));

// 24. check if string includes "JS"
function includesJS(str) {
    return str.includes("JS");
}
console.log(includesJS("Learning JS is fun!"));

// 25. factorial using for loop
function factorial(num) {
    let fact = 1;
    for (let i = 1; i <= num; i++) fact *= i;
    return fact;
}
console.log(factorial(5));
// 26. Global variable
let globalVar = "I am global";
function showGlobal() {
    console.log(globalVar);
}
showGlobal();

// 27. Local variable
function localExample() {
    let localVar = "I am local";
    console.log(localVar);
}
localExample();
// console.log(localVar); // Error if uncommented

// 28. Function with local count
function counterFunction() {
    let count = 0;
    count++;
    console.log(count);
}
counterFunction();
counterFunction(); // Each call resets count because it's local

// 29. Two functions with same local variable name
function funcA() {
    let x = 10;
    console.log("funcA x:", x);
}
function funcB() {
    let x = 20;
    console.log("funcB x:", x);
}
funcA();
funcB();

// 30. Modify global variable
let score = 0;
function increaseScore() {
    score += 10;
}
console.log("Before:", score);
increaseScore();
console.log("After:", score);
