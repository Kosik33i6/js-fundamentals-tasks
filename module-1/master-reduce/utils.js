export const arrayValidator = function(array) {
  const isArray = Array.isArray(array);
  if(!isArray) throw new Error('Argument have to be an array');
};

export const callbackValidator = function(callback) {
  const isCallback = typeof callback === 'function';
  if(!isCallback) throw new Error('Argument have to be a function');
};
