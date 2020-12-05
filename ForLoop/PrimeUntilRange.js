const prompt = require('prompt-sync')();
var numArray= new Array(5);
var primeNumberArr =[];
for(let i=0;i<numArray.length;i++)
{
    numArray[i]=Number(prompt('Enter the number: '));
}
for(let i=0;i<numArray.length;i++)
{
    let flag = true;
    if (numArray[i] <= 1)
        flag = false;
    else 
    {
        for (let j = 2; j < numArray[i]; j++) 
        {
            if (numArray[i]%j==0)
                flag = false;
        }
    }
    if(flag==true)
    primeNumberArr[i]=numArray[i];
}
console.log("Prime numbers:")
primeNumberArr.forEach(element=>console.log(element));