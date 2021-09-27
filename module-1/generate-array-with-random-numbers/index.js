import {randomNumberFromRange, numberValidator, lengthValidator, integerValidator, minMaxValidator} from './utils';

function generateArrayWithRandomNumbers(howManyNumbers = 10, min = 0, max = 10) {
  lengthValidator(howManyNumbers);
  numberValidator(howManyNumbers, min, max);
  integerValidator(howManyNumbers);
  minMaxValidator(min, max);

  const arrayWithRandomNumbers = Array.from({length: howManyNumbers}, () => randomNumberFromRange(min, max));
  return arrayWithRandomNumbers;
}
console.log(generateArrayWithRandomNumbers(20, 99, 100));

function generateArrayOfArrays(howManyArrays = 10, howManyNumbers = 10, min = 1, max = 10) {
  lengthValidator(howManyArrays, howManyNumbers);
  numberValidator(howManyArrays, howManyNumbers, min, max);
  integerValidator(howManyArrays, howManyNumbers);
  minMaxValidator(min, max);

  const arrayOfArrays = Array.from({length: howManyArrays}, () => generateArrayWithRandomNumbers(howManyNumbers, min, max));
  return arrayOfArrays;
}
console.log(generateArrayOfArrays(10, 10, 20, 100));


