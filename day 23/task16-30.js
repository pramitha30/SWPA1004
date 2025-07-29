// 16. Print numbers 1 to 10
for (let i = 1; i <= 10; i++) console.log(i);

// 17. Print even numbers 1 to 20
for (let i = 2; i <= 20; i += 2) console.log(i);

// 18. Print odd numbers 1 to 20 using while
let i = 1;
while (i <= 20) {
    if (i % 2 !== 0) console.log(i);
    i++;
}

// 19. Print 5 to 1 using do...while
let j = 5;
do {
    console.log(j);
    j--;
} while (j >= 1);

// 20. Sum of numbers 1 to 50
let sum = 0;
for (let i = 1; i <= 50; i++) sum += i;
console.log("Sum:", sum);

// 21. Factorial of a number
let num = 5, fact = 1;
for (let i = 1; i <= num; i++) fact *= i;
console.log("Factorial:", fact);

// 22. Iterate array of names
let names = ["Alice", "Bob", "Charlie"];
for (let name of names) console.log(name);

// 23. Print characters of string one by one
let str2 = "Hello";
let k = 0;
while (k < str2.length) {
    console.log(str2[k]);
    k++;
}

// 24. Countdown 10 to 1
for (let i = 10; i >= 1; i--) console.log(i);

// 25. Print pattern
for (let i = 1; i <= 3; i++) {
    console.log("*".repeat(i));
}

// 26. for...of array of fruits
let fruits = ["Apple", "Banana", "Mango"];
for (let fruit of fruits) console.log(fruit);

// 27. for...in object properties
let person = { name: "John", age: 30, city: "Delhi" };
for (let key in person) console.log(key + ":", person[key]);

// 28. Find max number in array
let arr = [4, 8, 1, 20, 15];
let max = arr[0];
for (let val of arr) if (val > max) max = val;
console.log("Max:", max);

// 29. Reverse a string
let original = "hello";
let reversed = "";
for (let char of original) reversed = char + reversed;
console.log(reversed);

// 30. Count vowels in string
let text = "education";
let vowelCount = 0;
for (let char of text.toLowerCase()) {
    if ("aeiou".includes(char)) vowelCount++;
}
console.log("Vowel Count:", vowelCount);
