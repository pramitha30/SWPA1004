// 1. greet()
function greet() {
    console.log("Hello, World!");
}
greet();

// 2. sayHello(name)
function sayHello(name) {
    console.log(`Hello, ${name}!`);
}
sayHello("Pramitha");

// 3. square(num)
function square(num) {
    return num * num;
}
console.log(square(5));

// 4. isEven(num)
function isEven(num) {
    return num % 2 === 0;
}
console.log(isEven(8));

// 5. age check
function checkAge(age) {
    return age >= 18 ? "Adult" : "Minor";
}
console.log(checkAge(20));
// 6. greet function expression
let greetExp = function() {
    console.log("Hello from function expression!");
};
greetExp();

// 7. square as function expression
let squareExp = function(num) {
    return num * num;
};
console.log(squareExp(6));

// 8. area of rectangle
let areaRectangle = function(length, width) {
    return length * width;
};
console.log(areaRectangle(5, 10));

// 9. palindrome check
let isPalindrome = function(str) {
    str = str.toLowerCase();
    return str === str.split('').reverse().join('');
};
console.log(isPalindrome("Level"));

// 10. reverse string
let reverseString = function(str) {
    return str.split('').reverse().join('');
};
console.log(reverseString("JavaScript"));
// 11. greet arrow function
let greetArrow = () => console.log("Hello, World!");
greetArrow();

// 12. add two numbers
let add = (a, b) => a + b;
console.log(add(5, 3));

// 13. cube of number
let cube = num => num ** 3;
console.log(cube(4));

// 14. divisible by 3 and 5
let divisibleBy3and5 = num => num % 3 === 0 && num % 5 === 0;
console.log(divisibleBy3and5(15));

// 15. greetUser with template literals
let greetUser = name => `Hello, ${name}! Welcome.`;
console.log(greetUser("Pramitha"));
