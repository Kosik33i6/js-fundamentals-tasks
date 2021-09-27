import {callbackValidator, arrayValidator} from './utils';

const numbers = [1, 2, 3, 4, 5];
const numbers2 = [12, 54, 18, 130, 44];
const numbers3 = [12, 5, 8, 130, 44];
const users = ['Michał', 'Aneta', 'Bartek', 'Piotr', 'Wojtek', 'Ania', 'Krzyś', 'Paulina'];

const getResult = function(value, index, array) {
  // return value > 3;
  return value === 'Aneta';
};

function mapFn(array, callback) {
  arrayValidator(array);
  callbackValidator(callback);
  const initialValue = [];
  const arrayCopy = [...array];

  const newArray = arrayCopy.reduce((accumulator, currentValue, index) => {
    accumulator.push(callback(currentValue, index, arrayCopy));
    return accumulator;
  }, initialValue);

  return newArray;
}

// const mapResult = mapFn(numbers, getResult);
// console.log('mapResult: ', mapResult);

function filterFn(array, callback) {
  arrayValidator(array);
  callbackValidator(callback);
  const initialValue = [];
  const arrayCopy = [...array];

  const filteredArray = arrayCopy.reduce((accumulator, currentValue, index) => {
    const isValueAreTruthy = callback(currentValue, index, arrayCopy);
    if(isValueAreTruthy) {
      accumulator.push(currentValue);
    }
    return accumulator;
  }, initialValue);

  return filteredArray;
}

// const filterFnResult = filterFn(numbers, getResult);
// console.log('filterFn: ', filterFnResult);

function everyFn(array, callback) {
  arrayValidator(array);
  callbackValidator(callback);
  const initialValue = null;
  const arrayCopy = [...array];

  const result = arrayCopy.reduce((accumulator, currentValue, index) => {
    const isCallbackReturnTrue = callback(currentValue, index, arrayCopy);

    if(!isCallbackReturnTrue) {
      console.log(arrayCopy, index);
      arrayCopy.splice(index);
      return false;
    }
    return true;
  }, initialValue);

  return result;
}

const everyFnResult = everyFn(users, getResult);
console.log('everyFn: ', everyFnResult);
console.log('numbers: ', numbers);

function someFn(array, callback) {
  arrayValidator(array);
  callbackValidator(callback);
  const initialValue = null;
  const arrayCopy = [...array];

  const result = arrayCopy.reduce((accumulator, currentValue, index) => {
    const isCallbackReturnTrue = callback(currentValue, index, arrayCopy);

    if(isCallbackReturnTrue) {
      arrayCopy.splice(index);
      return true;
    }
    return false;
  }, initialValue);

  return result;
}

const someFnResult = someFn(users, getResult);
console.log('someFnResult: ', someFnResult);
console.log('numbers: ', numbers);
