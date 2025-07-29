let arr = [5, 10, 15, 20, 25, 50, 60, -5];

// 21. .map() double each number
let doubled = arr.map(num => num * 2);
console.log(doubled);

// 22. .filter() even numbers
let evens = arr.filter(num => num % 2 === 0);
console.log(evens);

// 23. .reduce() sum of numbers
let totalSum = arr.reduce((sum, num) => sum + num, 0);
console.log(totalSum);

// 24. .find() first number > 50
let firstGreater50 = arr.find(num => num > 50);
console.log(firstGreater50);

// 25. .includes()
let fruitsArr = ["apple", "banana", "mango"];
console.log(fruitsArr.includes("banana"));

// 26. .indexOf()
console.log(fruitsArr.indexOf("apple"));

// 27. .join() to sentence
let words = ["Learning", "JavaScript", "is", "fun"];
console.log(words.join(" "));

// 28. .every() check all numbers
console.log(arr.every(num => typeof num === "number"));

// 29. .some() check if at least one negative
console.log(arr.some(num => num < 0));

// 30. Combine arrays
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let combinedConcat = arr1.concat(arr2);
let combinedSpread = [...arr1, ...arr2];

console.log(combinedConcat);
console.log(combinedSpread);
