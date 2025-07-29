// 1. Check if a number is positive or negative
let num1 = -5;
if (num1 >= 0) {
    console.log("Positive Number");
} else {
    console.log("Negative Number");
}

// 2. Check if a number is even or odd
let num2 = 7;
if (num2 % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}

// 3. Check age category
let age = 65;
if (age < 18) {
    console.log("Minor");
} else if (age < 60) {
    console.log("Adult");
} else {
    console.log("Senior Citizen");
}

// 4. Leap year check
let year = 2024;
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log("Leap Year");
} else {
    console.log("Not a Leap Year");
}

// 5. Compare two numbers
let a = 10, b = 20;
console.log(a > b ? a : b);

// 6. Grade system
let marks = 82;
if (marks >= 90) console.log("A");
else if (marks >= 75) console.log("B");
else if (marks >= 60) console.log("C");
else console.log("F");

// 7. Divisible by 3 and 5
let num3 = 15;
if (num3 % 3 === 0 && num3 % 5 === 0) {
    console.log("Divisible by 3 and 5");
} else {
    console.log("Not Divisible by 3 and 5");
}

// 8. Check if string is empty
let str1 = "";
if (str1.length === 0) {
    console.log("Empty string");
} else {
    console.log("Not empty");
}

// 9. Switch for day name
let dayNum = 3;
switch (dayNum) {
    case 1: console.log("Monday"); break;
    case 2: console.log("Tuesday"); break;
    case 3: console.log("Wednesday"); break;
    case 4: console.log("Thursday"); break;
    case 5: console.log("Friday"); break;
    case 6: console.log("Saturday"); break;
    case 7: console.log("Sunday"); break;
    default: console.log("Invalid Day");
}

// 10. Switch for vowels
let char = 'e';
switch (char) {
    case 'a': case 'e': case 'i': case 'o': case 'u':
        console.log("Vowel"); break;
    default: console.log("Not a vowel");
}

// 11. Weather-based clothing
let weather = "cold";
if (weather === "sunny") console.log("Wear a t-shirt");
else if (weather === "rainy") console.log("Wear a raincoat");
else if (weather === "cold") console.log("Wear a jacket");

// 12. Switch for weekend/weekday
let dayInput = "Sunday";
switch (dayInput) {
    case "Saturday": case "Sunday":
        console.log("Weekend"); break;
    default:
        console.log("Weekday");
}

// 13. Check password strength
let password = "mypassword123";
if (password.length >= 8) console.log("Strong Password");
else console.log("Weak Password");

// 14. Compare strings case-insensitive
let s1 = "Hello", s2 = "hello";
if (s1.toLowerCase() === s2.toLowerCase()) {
    console.log("Strings are equal");
} else {
    console.log("Strings are not equal");
}

// 15. Check if number is in range
let n = 50;
if (n >= 10 && n <= 100) {
    console.log("Within range");
} else {
    console.log("Out of range");
}
