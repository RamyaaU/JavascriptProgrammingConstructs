//defining console read write module for taking input from the user
io = require('console-read-write');

//making the function and declaring it async
//async makes the function execute when called and wait for user input statement
//if async is not defined then await can not be defined and all user inputs will be taken together
async function main()
{
    console.log("Enter your choice \n1. Convert feet to inch\n2. Convert feet to metre\n3. Convert inch to feet \n4. Convert metre to feet");
     //taking input from the user about reading type of conversion
    let choice= parseInt(await io.read());
    switch(choice)
    {
        case 1:
            console.log("Enter in Feet");
            let feetToInch = parseInt(await io.read());
            console.log("Inches: " + feetToInch * 12);
            break;
        case 2:
            console.log("Enter in feet");
            let feetToMetre = parseInt(await io.read());
            console.log("Meters: " + feetToMetre/3.28084);
            break;
        case 3:
            console.log("Enter in inches");
            let inchToFeet = parseInt(await io.read());
            console.log("Feet: " + inchToFeet/12);
            break;
        case 4:
            console.log("Enter in metre");
            let meterToFeet = parseInt(await io.read());
            console.log("Feet: " + meterToFeet * 3.28084);
            break;    
        default:
            console.log("Invalid Choice");
            break;
    }
}
main();