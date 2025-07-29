// 1. Create an array of 5 numbers
let numbers = [10, 20, 30, 40, 50];
console.log(numbers);

// 2. Favorite colors and log each by index
let colors = ["Blue", "Green", "Red"];
console.log(colors[0], colors[1], colors[2]);

// 3. Create empty array and add elements
let fruits = [];
fruits[0] = "Apple";
fruits[1] = "Mango";
fruits[2] = "Banana";
console.log(fruits);

// 4. Mixed array and log its length
let mixed = ["Alice", 25, true, null];
console.log(mixed.length);

// 5. Access last element
console.log(numbers[numbers.length - 1]);

// 6. Use for loop to print array
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// 7. Use for...of to iterate fruits
for (let fruit of fruits) {
    console.log(fruit);
}

// 8. typeof and Array.isArray
console.log(typeof fruits); // object
console.log(Array.isArray(fruits)); // true

// 9. Nested array and access inner value
let nestedArr = [[1, 2], [3, 4], [5, 6]];
console.log(nestedArr[1][0]); // 3

// 10. Replace second element
numbers[1] = 99;
console.log(numbers);
// 11. push()
numbers.push(60);
console.log(numbers);

// 12. pop()
let removedLast = numbers.pop();
console.log("Removed:", removedLast);

// 13. unshift()
numbers.unshift(5);
console.log(numbers);

// 14. shift()
let removedFirst = numbers.shift();
console.log("Removed:", removedFirst);

// 15. .length
console.log("Array length:", numbers.length);

// 16. Function to add unique item
function addUniqueItem(arr, item) {
    if (!arr.includes(item)) arr.push(item);
}
let items = ["Pen", "Pencil"];
addUniqueItem(items, "Eraser");
addUniqueItem(items, "Pen"); // won't add duplicate
console.log(items);

// 17. reverse()
let nums = [1, 2, 3, 4];
nums.reverse();
console.log(nums);

// 18. sort ascending
let unsorted = [30, 10, 50, 20];
unsorted.sort((a, b) => a - b);
console.log(unsorted);

// 19. splice() remove 2 items from middle
let arrSplice = [1, 2, 3, 4, 5];
arrSplice.splice(2, 2);
console.log(arrSplice);

// 20. slice() copy portion
let arrSlice = [10, 20, 30, 40, 50];
let newSlice = arrSlice.slice(1, 4);
console.log(newSlice);
