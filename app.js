import recursivePromise from './module-4/recursive-promise/index';
import promises from './module-4/recursive-promise/promises';

const result = recursivePromise(promises).then(response => {
  console.log('response: ', response);
  return response;
});
console.log('result: ', result);
