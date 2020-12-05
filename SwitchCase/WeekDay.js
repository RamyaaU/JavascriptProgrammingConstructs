//defining console read write module for taking input from the user
io= require('console-read-write');
//making the function and declaring it async
//async makes the function execute when called and wait for user input statement
//if async is not defined then await can not be defined and all user inputs will be taken together
async function main()
{
    console.log("Please enter the day of week");
    //taking input from the user
    let n= parseInt(await io.read());
    //switch case for converting number to week day name
    switch(n)
    {
        case 0:
            console.log("Sunday");
            break;
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thrusday");
            break;
        case 5:
            console.log('Friday');
            break;
        case 6:
            console.log("Saturday");
            break;
        default:
            console.log("Please enter a valid day!");
    }
}
main();