// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// Problem solving

// The problem
// Calculate the temperature amplitude from an array of temps, keeping in mind there will be errors

const temperatures = [3, -2, -6, 'error', 9, 13, 17, 15, 14, 9, 5];

function numberfilter(element) {
  return typeof element === 'number';
}

const filterTemperatures = temperatures.filter(numberfilter);
console.table(filterTemperatures);

let max = Math.max(...filterTemperatures);
let min = Math.min(...filterTemperatures);

const calcTempAmplitude = function (maxTemp, minTemp) {
  return maxTemp - minTemp;
};

let tempAmplitude = calcTempAmplitude(max, min);
console.log(tempAmplitude);
