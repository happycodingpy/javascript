// Coding Challenge #2

// Use the BMI example from Challenge #1, and the code you already wrote, and
// improve it.

// Your tasks:

// 1. Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"

// Hint: Use an if/else statement 

const massMark = 95;
const heightMark = 1.88;

const massJohn = 85;
const heightJohn = 1.76;

const BMImark = massMark / heightMark ** 2;
const BMIjohn = massJohn / (heightJohn * heightJohn);

if (BMImark > BMIjohn) {
    console.log(`¡Mark's BMI (${BMImark}) is higher than John's (${BMIjohn})!`)
} else {
    console.log(`John's BMI (${BMIjohn}) is higher than Mark's (${BMImark})!`)
}