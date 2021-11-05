const isDateAnObject = require( '@stdlib/assert-is-date-object' );
// date instanceof Date
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
  const isObject = isDateAnObject(input);
  const isNumber = typeof input === 'number';
  const isString = typeof input === 'string';

  const isInputHaveCorrectTypes = isObject || isNumber || isString;
  if(!isInputHaveCorrectTypes) throw new Error('Incorrect input types');

  const currentYear = new Date().getFullYear();

  let output = null;

  if(isObject) {
    output = new InputObjectStrategy(input);
  }

  if(isString) {
    output = new InputStringtStrategy(input);
  }

  if(isNumber && Number.isInteger(input)) {
    output = new InputNumberStrategy(input);
  }

  return output.setMyAge(currentYear);
}

const result1 = getMyAge(new Date(1990, 1, 1));
const result2 = getMyAge('1990');
const result3 = getMyAge(1990);

console.log(result1);
console.log(result2);
console.log(result3);

// wyniki result1, result2 i result3 mają być identyczne
