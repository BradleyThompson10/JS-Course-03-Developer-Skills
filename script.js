// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/*

// Problem solving

// The problem
// Calculate the temperature amplitude from an array of temps, keeping in mind there will be errors

//second problem
//cacluate using mutiple arrays

const temperatures = [3, -2, -6, 'error', 9, 13, 17, 15, 14, 9, 5];
const temperatures2 = [4, 5, 6, 19, 15, 14, 9, 3, 7, 'error', 12];
const MergedTemperatures = temperatures.concat(temperatures2);

//first way to solve the problem 

function numberfilter(element) {
  return typeof element === 'number';
}

const filterTemperatures = MergedTemperatures.filter(numberfilter);
console.table(filterTemperatures);

let max = Math.max(...filterTemperatures);
let min = Math.min(...filterTemperatures);

const calcTempAmplitude = function (maxTemp, minTemp) {
  return maxTemp - minTemp;
};

let tempAmplitude = calcTempAmplitude(max, min);
console.log(tempAmplitude);

//Another way to solve the problem 

// const calcTempAmplitude = function (t1, t2) {
//   const temps = t1.concat(t2);

//  let max = temps[0];
//  let min = temps[0];

//  for(let i = 0; i < temps.length; i++) {
//   const curTemp = temps[i]
//   if(typeof curTemp !== 'number') continue

//   if(curTemp > max) max = curTemp;
//   if(curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min
// };

// const tempAmplitude = calcTempAmplitude(temperatures, temperatures2)
// console.log(tempAmplitude);



const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    value: Number(prompt('Degrees celsius:')),
  };

  console.table(measurement);

  //console.log(measurement.value);
  // console.warn(measurement.value);
  // console.error(measurement.value);
  const Kelvin = measurement.value + 273;
  return Kelvin;
};

console.log(measureKelvin());

*/

//Coding Challenge #1

// const arr = [17, 21, 23];
// const arr1 = [12, 5, -5, 0, 4];

// let forcast = [];

// const printForcast = function (arr) {
//   for (let i = 0; i < arr.length; i++) {
//     forcast += `${arr[i]}ºC in ${i + 1} days ... `;
//   }

//   return forcast;
// };

// printForcast(arr);
// console.log(forcast);

//teachers version

const arr = [17, 21, 23];

const printForcast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}ºC in ${i + 1} days ... `;
  }

  console.log('... ' + str);
};

printForcast(arr);
