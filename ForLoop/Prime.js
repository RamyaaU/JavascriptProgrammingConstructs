const prompt = require('prompt-sync')();
let n = Number(prompt('Enter the number: '));
let flag=true;
if (n <= 1)
flag=false;
else 
{
    for (let i = 2; i < n; i++) 
    {
        if (n % i == 0)
            flag = false;        
    }
}
if(flag==false)
console.log("It is not a prime number");
if(flag==true)
console.log("It is a prime number");