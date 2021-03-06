// Coding Challenge #1

// Given an array of forecasted maximum temperatures, the thermometer displays a
// string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1
// days ... 21ºC in 2 days ... 23ºC in 3 days ..."

// Your tasks:

// 1. Create a function 'printForecast' which takes in an array 'arr' and logs a
// string like the above to the console. Try it with both test datasets.

// 2. Use the problem-solving framework: Understand the problem and break it up
// into sub-problems!

// Test data:
// § Data 1: [17, 21, 23]
// § Data 2: [12, 5, -5, 0, 4]

//  1) Uderstanding the problem
// - Array transformed to string, separated by ...
// - What is the X day? Answer: index + 1

// 2) Breaking up into sub-problems
//- Transform arary to intro string
//- Transform each element to string with ºC
// - Strings need to contain day (index + 1)
// - Add ... between elements and start and end of string

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = arr => {
  let day = '';
  for (let i = 0; i < arr.length; i++) {
    day += `${arr[i]}ºC in ${i + 1} days... `;
  }
  console.log(day);
  return day;
};
const d1 = printForecast(data1);
const d2 = printForecast(data2);
console.log(`... ${d1}`);
console.log(`... ${d2}`);
