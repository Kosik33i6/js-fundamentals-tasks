import {arrayValidator, callbackValidator} from './utils';

/**
 * TODO: create functions where you will use for or while loops to copy the following array methods:
 * TODO: .forEach
 * TODO: .map
 * TODO: .entries
 * TODO: .filter
 * TODO: .reduce
 * TODO: .every
 * TODO: .some
 */

export const forEachFn = (array, callback) => {
  arrayValidator(array);
  //  TODO: Add validation for callback
  callbackValidator(callback);
  // TODO: copy of array
  const arrayCopy = [...array];

  for(let i = 0; i < arrayCopy.length; i += 1) {
    callback(arrayCopy[i], i, arrayCopy);
  }
};

export const mapFn = (array, callback) => {
  arrayValidator(array);
  //  TODO: Add validation for callback
  callbackValidator(callback);
  const newArray = [];

  // TODO: copy of array
  const arrayCopy = [...array];

  for(let i = 0; i < arrayCopy.length; i += 1) {
    const result = callback(arrayCopy[i], i, arrayCopy);
    newArray.push(result);
  }
  return newArray;
};

export const entriesFn = (array) => {
  arrayValidator(array);

  let index = 0;

  const generator = function() {
    const result =  index < array.length ?
                    {value: [index, array[index]], done: false} :
                    {value: undefined, done: true};
    index += 1;
    return result;
  };

  return {next: generator,};
};

export const entriesFnSecondSolution = function* (array) {
  // TODO: Add generator
  arrayValidator(array);
  yield* array;
};

export const filterFn = (array, callback) => {
  arrayValidator(array);
  callbackValidator(callback);

  const arrayCopy = [...array];
  const newArray = [];
  for(let i = 0; i < arrayCopy.length; i +=1) {
    console.log('array[i]');
    const isCallbackReturnTrue = callback(arrayCopy[i], i, arrayCopy) === true;
    console.log('isCallbackReturnTrue: ', isCallbackReturnTrue);
    if(isCallbackReturnTrue) {
      newArray.push(arrayCopy[i]);
    }
  }
  return newArray;
};

export const reduceFn = (array, callback, initial) => {
  arrayValidator(array);
  callbackValidator(callback);
  let result;
  const arrayCopy = array;
  const isInitialUndefind = initial === undefined;
  if(!isInitialUndefind) {
    for(let i = 0; i < arrayCopy.length; i += 1) {
      let currentInitial = i === 0 ? initial : result;
      result = callback(currentInitial, arrayCopy[i], i, arrayCopy);
      currentInitial = result;
    }
  } else {
    for(let i = 1; i < arrayCopy.length; i += 1) {
      let currentInitial = i > 1 ? result : arrayCopy[i - 1];
      result = callback(currentInitial, arrayCopy[i], i, arrayCopy);
      currentInitial = result;
    }
  }
  return result;
};

export const everyFn = (array, callback) => {
  arrayValidator(array);
  callbackValidator(callback);

  let result;
  for(let i = 0; i < array.length; i += 1) {
    result = callback(array[i], i, array);
    if(!result) {
      return false;
    }
  }
  return true;
};

export const someFn = (array, callback) => {
  arrayValidator(array);
  callbackValidator(callback);

  let result;
  for(let i = 0; i < array.length; i += 1) {
    result = callback(array[i], i, array);
    if(result) {
      return true;
    }
  }
  return false;
};
