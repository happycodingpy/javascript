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
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitude = calcTempsAmplitude(temperatures);
console.log(amplitude);

// PROBLEM 2:
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 array, shoud we implement functionality twice? NO" Just merge two arrays

// 2) Breaking up into sub-problems
// - How to merge 2 arrays?

const calcTempsAmplitudeNew = (t1, t2) => {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; temps.length; i++) {
    const curTemp = temps[i];
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitudeNew = calcTempsAmplitudeNew(
  [-10, -15, -2, 4, 5, 8, 10],
  [-0, -1, -3, 20, 25, 35]
);
console.log(amplitudeNew);

// Bug
const measureKelvin = () => {
  const measurement = {
    type: 'temp',
    unit: 'celsius',

    // C) FIX
    value: Number(prompt('Degrees celsius: ')),
  };

  // B) FIND
  console.table(measurement);

  // console.log(measurement.value);
  // console.warn(measurement.value);
  // console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};

// A) IDENTIFY
console.log(measureKelvin);
