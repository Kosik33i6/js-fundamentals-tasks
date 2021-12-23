// // * Daata
// import { alphabet, numbers, persons } from './db/data';

// //  * Imports from module-0
// import includes from './module-0/includes';
// import isRectangularTriangle from './module-0/is-rectangular-triangle';

// //  * Imports from module-1
// import aggregateIntoChunks from './module-1/aggregate-array-into-chunks';
// import {forEachFn, mapFn, entriesFn, entriesFnSecondSolution, reduceFn, everyFn, someFn} from './module-1/array-methods';

// // * Utlis import
// import {muliplicationByTwo, consoleLogMliplicationByTwo, getSquareNumber} from './utils';

// // * Task includes from module-0
// const includes1 = includes(persons, 'Bartek', 2);
// const includes2 = includes(persons, 'Bartek', 2);
// const includes3 = includes(numbers, 0, 0);

// console.log('===================================================');
// console.log('Task includes from module-0');
// console.log('includes result: ', includes1);
// console.log('includes result: ', includes2);
// console.log('includes result: ', includes3);
// console.log('===================================================');
// console.log();

// // * Task isRectangularTriangle from module-0
// const cond1 = isRectangularTriangle(3, 4, 5);
// const cond2 = isRectangularTriangle(4, 3, 5);
// const cond3 = isRectangularTriangle(4, 3, 2);
// const cond4 = isRectangularTriangle(4, 4, 4);

// console.log('===================================================');
// console.log('Task isRectangularTriangle from module-0');
// console.log('isRectangularTriangle result: ', cond1);
// console.log('isRectangularTriangle result: ', cond2);
// console.log('isRectangularTriangle result: ', cond3);
// console.log('isRectangularTriangle result: ', cond4);
// console.log('==================================================');
// console.log();

//  // * Task aggregateArrayIntoChunks from module-1
//  const chunks = aggregateIntoChunks(alphabet);
//  const chunks2 = aggregateIntoChunks(numbers);

// console.log('===================================================');
// console.log('Task aggregateArrayIntoChunks from module-1');
// console.log('aggregateIntoChunks:\n ', chunks);
// console.log('aggregateIntoChunks:\n ', chunks2);
// console.log('===================================================');
// console.log();

// // * Task arrayMethods from module-1
// console.log('===================================================');
// console.log('Task arrayMethods from module-1');
// console.log('---------------------------------------------------');
// console.log('forEachFn: ');
// forEachFn(numbers, consoleLogMliplicationByTwo);
// console.log('---------------------------------------------------');
// console.log();
// console.log('---------------------------------------------------');
// console.log('mapFn: ');
// const newNumbers = mapFn(numbers, getSquareNumber);
// console.log(newNumbers);
// console.log('---------------------------------------------------');
// console.log();
// console.log('---------------------------------------------------');
// console.log('entriesFn: ');
// const iterator1 = entriesFn(persons);
// console.log(iterator1.next().value);
// console.log(iterator1.next().value);
// console.log(iterator1.next().value);
// console.log(iterator1.next().value);
// console.log(iterator1.next().value);
// console.log(iterator1.next().value);
// console.log(iterator1.next().value);
// console.log('---------------------------------------------------');
// console.log();
// console.log('---------------------------------------------------');
// console.log();
// console.log('entriesFnSecondSolution: ');
// const iterator2 = entriesFnSecondSolution(persons);
// console.log(iterator2.next().value);
// console.log(iterator2.next().value);
// console.log(iterator2.next().value);
// console.log(iterator2.next().value);
// console.log(iterator2.next().value);
// console.log(iterator2.next().value);
// console.log(iterator2.next().value);
// console.log('---------------------------------------------------');
// console.log('---------------------------------------------------');
// console.log();
// console.log('---------------------------------------------------');
// console.log('reduceFn: ');
// console.log();

// const reduceResult = numbers.reduce(function(previousValue, currentValue) {
//   return previousValue + currentValue;
// });
// console.log('reduceResult: ', reduceResult);

// const reduceFnResult = reduceFn(numbers, function(previousValue, currentValue) {
//   return previousValue + currentValue;
// });
// console.log('reduceFnResult: ', reduceFnResult);
// console.log('---------------------------------------------------');
// console.log();
// console.log('---------------------------------------------------');
// console.log('everyFn: ');
// const everyFnResult = everyFn(numbers, function(number) {
//   return number < 30;
// });
// console.log('everyFnResult: ', everyFnResult);
// console.log('---------------------------------------------------');
// console.log();
// console.log('---------------------------------------------------');
// console.log('someFn: ');
// const someFnResult = someFn(numbers, function(number) {
//   return number > 10;
// });
// console.log('someFnResuly: ', someFnResult);
