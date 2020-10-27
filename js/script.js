// LAB 01
//EXERCISE 1: The Fortune Teller
//Why pay a fortune teller when you can just program your fortune yourself? Store the following into variables: job title, geographic location, annual salary, company name. Output your fortune to the console like so: "You will be a X in Y, making $N for Z."

let jobTitle = "UI Designer";
let geoLocation = "Toronto";
let annualSal = 100000;
let compName = "Ubisoft";

let content01 = document.querySelector('#ex-01');
content01.textContent = ("You will be a " + jobTitle + " in " + geoLocation + " making $" + annualSal + " for " + compName);

//EXERCISE 2: The Age Calculator
//Forgot how old someone is? Calculate it! Store the current year in a variable. Store their birth year in a variable. Calculate their age based on the stored values. Output them to the console like so: "They are NN years old.", substituting the values.

let birthYear = 2000;
var date = new Date();
let currentYear = date.getFullYear();

let getAge = currentYear - birthYear;

let content02 = document.querySelector('#ex-02');
content02.textContent = ("You are " + getAge + " years old!");

//EXERCISE 3: The Lifetime Supply Calculator
//Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more! Store your current age into a variable. Store a maximum age into a variable. Store an estimated amount per day (as a number). Calculate how many you would eat total for the rest of your life. Output the result to the console like so: "You will need NN to last you until the ripe old age of X".

let currentAge = 20;
let maxAge = 100;
let estimAmountDaily = 30;

let lifetimeAmount = (maxAge - currentAge) * 30;
let futureAge = maxAge - currentAge;

let content03 = document.querySelector('#ex-03');
content03.textContent = ("You will need " + lifetimeAmount + " pieces of candy to last you till until the rip old age of " + futureAge + "!");

//EXERCISE 4: The Geometrizer
//Calculate properties of a circle, using the definitions here. Store a radius into a variable. Calculate the circumference based on the radius, and output "The circumference is NN". Calculate the area based on the radius, and output "The area is NN".

let radius = 10;
let circumferenceTotal = (2 * Math.PI * radius).toFixed(2);
let areaTotal = (Math.PI * radius ** 2).toFixed(2);

let content04 = document.querySelector('#ex-04');
content04.textContent = ("The circumfrence is " + circumferenceTotal + " The Area of the circle is " + areaTotal);

//EXERCISE 5: The Temperature Converter
//It's hot out! Let's make a converter based on the steps here. Store a celsius temperature into a variable. Convert it to fahrenheit and output "NN°C is NN°F".  Now store a fahrenheit temperature into a variable. Convert it to celsius and output "NN°F is NN°C."

let celsius = 20;
let fahrenheitConversion = (celsius * 1.8) + 32;

let fahrenheit = 108;
let celsiusConversion = ((fahrenheit - 32) * .5556).toFixed(0);

let content05 = document.querySelector('#ex-05');
content05.textContent = (celsius + "C is " + fahrenheitConversion + "F and ") + (fahrenheit + "F is " + celsiusConversion + "C");

// LAB 02
// EXERCISE 1
// Write a function named squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."

function squareNumber(a) {
    let result;
    let content06 = document.querySelector('#ex-06');
    content06.textContent = ("The result of squaring the number " + a + " is " + (result = Math.sqrt(a)).toFixed(2));
    return result;
}
var squaredNumber = 64;
squareNumber(squaredNumber);

// EXERCISE 2
// Write a function named halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".

function halfNumber (a) {
    let result;
    let content07 = document.querySelector('#ex-07');
    content07.textContent = ("Half of " + a + " is " + (result = a/2));
    return result;
}
let halfNum = 32;
halfNumber (halfNum);

// EXERCISE 3
// Write a function named percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."

function percentOf (num1,num2) {
    let result;
    let content08 = document.querySelector('#ex-08');
    content08.textContent = (num2 + " is " + (result = (num2 / num1) * 100).toFixed(2) + "% of " + num1);
    return result;
}
percentOf(160, 40);

// EXERCISE 4
// Write a function named areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// Bonus: Round the result so there are only two digits after the decimal.

function areaOfCircle (radius) {
    let result;
    let content09 = document.querySelector('#ex-09');
    var radiusResult = (result = (Math.PI * radius ** 2).toFixed(2));
    content09.textContent = ("The area for a circle with the radius " + radius + " is " + radiusResult);
    return result;
}
let radNum = 12;
areaOfCircle(radNum);

// EXERCISE 5
// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier
// 1. Take half of the number and store the result.
// 2. Square the result of #1 and store that result. 
// 3. Calculate the area of a circle with the result of #2 as the radius.   
// 4. Calculate what percentage that area (#3) of the squared result (#2).

let content10 = document.querySelector('#ex-10');
function allFunctions (a) {
    console.log("All Functions: ");
    let half = halfNumber(a);
    let sqrRoot = squareNumber(half);
    let areaOf = areaOfCircle(sqrRoot);
    let percentageOf = percentOf(areaOf, sqrRoot);
    return percentageOf;
}
let totalFunc = 70;
content10.textContent = allFunctions(totalFunc);