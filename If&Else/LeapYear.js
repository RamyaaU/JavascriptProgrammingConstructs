const prompt = require('prompt-sync')();
//User inpuT
const year = prompt('Enter year: ');  
if (year % 400 == 0)
console.log("It's a Leap year");
// Else If a year is muliple of 100,
// then it is not a leap year
else if (year % 100 == 0)
console.log("It's not a Leap year");
// Else If a year is muliple of 4,
// then it is a leap year
else if (year % 4 == 0)
console.log("It's a Leap year");
else
console.log("It's not a Leap year");