// switch.js

// 1. Day of week
let day = 3;
switch(day) {
    case 1: console.log("Monday"); break;
    case 2: console.log("Tuesday"); break;
    case 3: console.log("Wednesday"); break;
    case 4: console.log("Thursday"); break;
    case 5: console.log("Friday"); break;
    case 6: console.log("Saturday"); break;
    case 7: console.log("Sunday"); break;
    default: console.log("Invalid");
}

// 2. Output for day = 9
let newDay = 9;
switch(newDay) {
    case 1: console.log("Mon"); break;
    case 2: console.log("Tue"); break;
    default: console.log("Invalid"); // Output: Invalid
}
