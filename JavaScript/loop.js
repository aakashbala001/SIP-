// loops.js

// 1. Multiplication table of 7
for (let i = 1; i <= 10; i++) {
    console.log(`7 x ${i} = ${7 * i}`);
}

// 2. Even numbers from 2 to 20 using while loop
let even = 2;
while(even <= 20) {
    console.log(even);
    even += 2;
}

// 3. Do-while from 10 to 1
let count = 10;
do {
    console.log(count);
    count--;
} while (count >= 1);

// 4. Difference between loops (commented explanation)
/*
- for: use when number of iterations is known.
- while: use when condition needs to be checked before each loop.
- do-while: use when loop must run at least once.
*/

// 5. Sum from 1 to 100
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log("Sum:", sum);
