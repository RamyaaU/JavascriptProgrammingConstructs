const prompt = require('prompt-sync')();
let num = Math.floor(Math.random()*100); 
console.log("Number is : "+num);
let n=num;
let start =0;
//let end = 100;
while(num>0){
if(n>num||n<num){
while(num<n){
    end = n;
    n=((start+end)/2);
}
while(num>n){
    start = n;
    n=((start+end)/2);
}
}
else if(num==n)
{
    console.log("Found the number "+n+" !!");
    break;
}
}