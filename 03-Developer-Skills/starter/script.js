// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const x = 23;
const y = x === 23 ? 'amazing!' : 'Oh no';
console.log(y);

// PROBLEM:
// We work for a company building a smart home thermometer.
// Our most recent task is this:
// "Given an array of temperatures of one day, calculate the temperature amplitude.
// Keep in mind thah sometimes there might be a sensor error"

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min tempratures?
// - What's a sensor error? And what to do?

// 2) Breaking up into sub-problem
// - How to ignore errors¿
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max(amplitude) and return it

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const calcTempsAmplitude = (temps) => {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; temps.length; i++) {
    const curTemp = temps[i];
    if (temps[i] > max) max = curTemp;
    if (temps[i] < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitude = calcTempsAmplitude(temperatures);
console.log(amplitude);
