const prompt = require('prompt-sync')();
let n = Number(prompt('Enter the number: '));
harmonicNo=0;
for(i=1;i<=n;i++)
{
    harmonicNo+=1/i;
}
console.log(n+"th Harmonic number= "+harmonicNo);