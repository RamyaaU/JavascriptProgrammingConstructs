const prompt = require('prompt-sync')();
let startMoney = 100;
let betMoney = 1;
let totalMoney=startMoney;
let betCount=0;
let winCount=0;
while(totalMoney>0 && totalMoney<200)
{
    var betResult = Math.floor(Math.random()*10)%2;
    betCount++;
    if(betResult==0)
    {
        //Round lost
        totalMoney-=betMoney;
    }
    else
    {
        //Round Won
        totalMoney+=betMoney;
        winCount++;
    }
}
console.log("Final total money= "+totalMoney);
console.log("Total betting rounds= "+betCount);
console.log("Total won rounds= "+winCount);