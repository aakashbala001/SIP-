// arrays.js

// 1. Student names
let students = ["Aman", "Anuj", "Amit", "Rani", "Ram"];
console.log(students[2]); // Third student

// 2. Array length and values
let fruits = ["Apple", "Banana", "Mango"];
console.log("Length:", fruits.length);
for(let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// 3. Array literal vs constructor
let arrLiteral = [1, 2, 3];
let arrConstructor = new Array(1, 2, 3);
console.log("Literal:", arrLiteral);
console.log("Constructor:", arrConstructor);

// 4. Values > 50
let numbers = [10, 55, 23, 80, 60];
for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] > 50) {
        console.log(numbers[i]);
    }
}

// 5. Output of items.length
let items = ["Pen", "Pencil", "Eraser"];
items[5] = "Scale";
console.log(items.length); // Output: 6 (undefined at index 3 and 4)
