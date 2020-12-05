const prompt = require('prompt-sync')();
let index = Number(prompt('Enter the number: '));
for(i=1;i<=index;i++)
{
    console.log(Math.pow(2,i));
}
