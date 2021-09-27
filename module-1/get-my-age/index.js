const isDateObject = require( '@stdlib/assert-is-date-object' );

// TODO: use STRATEGY PATTERN

const InputObjectStrategy = function(input) {
  this.inputValue = input.getFullYear();

  this.setMyAge = function(currentYear) {
    return currentYear - this.inputValue;
  };
};
const InputStringtStrategy = function(input) {
  this.inputValue = input;

  this.setMyAge = function(currentYear) {
    return currentYear - parseInt(this.inputValue, 10);
  };
};
const InputNumberStrategy = function(input) {
  this.inputValue = input;

  this.setMyAge = function(currentYear) {
    return currentYear - this.inputValue;
  };
};

function getMyAge(input) {
  const isObject = isDateObject(input);
  const isNumber = typeof input === 'number';
  const isString = typeof input === 'string';

  const isInputHaveCorrectTypes = isObject || isNumber || isString;
  if(!isInputHaveCorrectTypes) throw new Error('Incorrect input types');

  const currentYear = new Date().getFullYear();

  if(isObject) {
    const inputObject = new InputObjectStrategy(input);
    return inputObject.setMyAge(currentYear);
  }

  if(isString) {
    const inputString = new InputStringtStrategy(input);
    return inputString.setMyAge(currentYear);
  }

  if(isNumber && Number.isInteger(input)) {
    const inputNumber = new InputNumberStrategy(input);
    return inputNumber.setMyAge(currentYear);
  }

  // const regExpIsYear = /^[0-9]{4}/;
  // ! is input date better validation


  // ! za duża wartoś wieku walidacja
  // ! wzorzec strategii
  //  ? 3 max 4 if
}
// console.log(isDateObject(new Date(1990, 1, 1)));
const result1 = getMyAge(new Date(1990, 1, 1));
const result2 = getMyAge('1990');
const result3 = getMyAge(1990);

console.log(result1);
console.log(result2);
console.log(result3);

// wyniki result1, result2 i result3 mają być identyczne
