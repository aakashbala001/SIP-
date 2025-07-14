// operators.js

// 1. Output of a++ + ++a
let a = 10;
console.log(a++ + ++a); // Output: 22

// 2. == vs ===
let num = 5;
let str = "5";
console.log(num == str);  // true
console.log(num === str); // false

// 3. x *= 3 + 2
let x = 5;
x *= 3 + 2;
console.log(x); // Output: 25

// 4. Ternary Operator
let marks = 45;
console.log(marks > 40 ? "Pass" : "Fail");

// 5. Expression: true && false || true
console.log(true && false || true); // Output: true
