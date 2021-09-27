export const randomNumberFromRange = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const numberValidator = function(...numbers) {
  numbers.forEach(number => {
    const isNumber = typeof number === 'number' || 'bigint';
    if(!isNumber) throw new Error('Number have to be integer');
  });
};

export const lengthValidator = function(...lengths) {
  lengths.forEach(number => {
    const isCorrectLength = number > 0;
    if(!isCorrectLength) throw new Error('Array length cannot be a negative number or zero');
  });
};

export const integerValidator = function(...numbers) {
  numbers.forEach(number => {
    const isInteger = Number.isInteger(number);
    if(!isInteger) throw new Error('Number have to be a integer number');
  });
};

export const minMaxValidator = function(min, max) {
  const isMinLessThenMax = min < max;
  if(!isMinLessThenMax) throw new Error('Argument min must be less then max');
};
