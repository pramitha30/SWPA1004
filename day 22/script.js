// Variables — Tasks 1–10

// 1. var
var myName = "Pramitha";
console.log("1. Name (var):", myName);

// 2. let
let age = 20;
console.log("2. Age (let):", age);
age = 21;
console.log("   Reassigned Age:", age);

// 3. const
const birthYear = 2005;
console.log("3. Birth Year (const):", birthYear);
// birthYear = 2004; //  Error: Assignment to constant variable

// 4. Multiple variables
let userName = "Pramitha";
let userAge = 20;
const isStudent = true;
console.log("4. Name:", userName, "| Age:", userAge, "| Student:", isStudent);

// 5. Update score
let score = 10;
console.log("5. Score:", score);
score = 20;
console.log("   Updated Score:", score);
score = 30;
console.log("   Again Updated Score:", score);

// 6. Global variable with var
var globalVar = "I'm global";
{
  console.log("6. Inside block:", globalVar);
}
console.log("   Outside block:", globalVar);

// 7. Block scope with let
{
  let blockVar = "Block scoped";
  console.log("7. Inside block:", blockVar);
}
// console.log("   Outside block:", blockVar); // Error: blockVar is not defined

// 8. Constants addition
const x = 5;
const y = 10;
const sum = x + y;
console.log("8. Sum of constants:", sum);

// 9. Redeclaration
var a = 10;
var a = 20; // ✅ Allowed
console.log("9. var redeclared:", a);

// let b = 10;
// let b = 20; // Error: Identifier 'b' has already been declared

// 10. Comments on usage
/*
 Use let when value will change.
 Use const when value should stay constant.
 Avoid var in modern JS; it's function-scoped and can cause bugs.
*/


//  Data Types — Tasks 11–20

// 11. String
const favMovie = "Inception";
console.log("11. Favorite movie:", favMovie);

// 12. Number
const heightCm = 160;
console.log("12. Height:", heightCm, "cm");

// 13. Boolean
let isLoggedIn = false;
console.log("13. Logged In?", isLoggedIn);

// 14. Null
let emptyValue = null;
console.log("14. Null variable:", emptyValue, "| Type:", typeof emptyValue);

// 15. Undefined
let unassigned;
console.log("15. Undefined variable:", unassigned, "| Type:", typeof unassigned);

// 16. Symbol
const uniqueId = Symbol('id');
console.log("16. Symbol:", uniqueId);

// 17. Object
const user = {
  name: "Pramitha",
  age: 20,
  email: "pramitha@example.com"
};
console.log("17. User Object:", user);

// 18. typeof null vs undefined
console.log("18. typeof null:", typeof null);        // object
console.log("    typeof undefined:", typeof undefined); // undefined

// 19. Array
const numbers = [1, 2, 3, 4, 5];
console.log("19. Array:", numbers, "| Type:", typeof numbers);

// 20. Array check
console.log("20. Is array?", Array.isArray(numbers));


//  Operators — Tasks 21–30

// 21. Arithmetic
let num1 = 15, num2 = 4;
console.log("21. Add:", num1 + num2);
console.log("    Subtract:", num1 - num2);
console.log("    Multiply:", num1 * num2);
console.log("    Divide:", num1 / num2);
console.log("    Modulus:", num1 % num2);

// 22. Area of rectangle
let width = 5;
let height = 10;
let area = width * height;
console.log("22. Area of rectangle:", area);

// 23. Shorthand assignment
let points = 50;
points += 10;
console.log("23. += Result:", points);
points *= 2;
console.log("    *= Result:", points);
points /= 4;
console.log("    /= Result:", points);

// 24. Counter
let counter = 0;
counter++;
console.log("24. Incremented:", counter);
counter--;
console.log("    Decremented:", counter);

// 25. Comparison
console.log("25. 5 > 3:", 5 > 3);
console.log("    5 <= 3:", 5 <= 3);

// 26. == vs ===
console.log("26. '5' == 5:", '5' == 5);   // true (type coercion)
console.log("    '5' === 5:", '5' === 5); // false (strict)

// 27. != vs !==
console.log("27. '5' != 5:", '5' != 5);     // false
console.log("    '5' !== 5:", '5' !== 5);   // true

// 28. Logical Operators
let isUser = true;
let isAdmin = false;
console.log("28. AND:", isUser && isAdmin); // false
console.log("    OR:", isUser || isAdmin);  // true
console.log("    NOT:", !isAdmin);          // true

// 29. Ternary
let personAge = 17;
let result = personAge >= 18 ? "Adult" : "Minor";
console.log("29. Age check:", result);

// 30. Combine everything
let marks = 85;
console.log("30. Marks:", marks, "| Type:", typeof marks);
console.log("    Is passed?", marks >= 40 ? "Yes" : "No");
