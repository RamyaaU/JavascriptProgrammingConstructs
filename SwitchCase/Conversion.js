const prompt=require('prompt-sync')();
let value = Number(prompt('Enter the number: '));
console.log(value+"feet="+value*12+"inches");
console.log(value+"inches="+value/12+"feet");
console.log(value+"feet="+value*0.3048+"metres");
console.log(value+"metres="+value*3.28+"feet");
