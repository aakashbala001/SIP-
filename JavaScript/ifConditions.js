// ifCondition.js

// 1. Even or Odd
let number = 7;
if (number % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}

// 2. Age Category
let age = 65;
if (age >= 60) {
    console.log("Senior");
} else if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}

// 3. Output of if (a = b)
let a = 5;
let b = 5;
if(a = b){ // Assignment, not comparison
    console.log("Equal");
} else {
    console.log("Not Equal");
}
