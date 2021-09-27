import randomNumberFromRange from './utils';

/**
 * TODO: Create the aggregateIntoChunks function that aggregates all the elements of the array into random length chunks
 * TODO: Each chunk should be 4 to 7 elemets, the last chunk should also be 4 to 7 in length
 */

const aggregateIntoChunks = (array) => {
  const isArray = Array.isArray(array);
  if(!isArray) throw new Error('Argument array have to be a array');

  const minArrayLength = 4;
  const isArrayHaveCorrectlylength = array.length >= minArrayLength;
  if(!isArrayHaveCorrectlylength) throw new Error('Argument array need miniumum 4 length');

  const min = 4;
  const max = 7;

  const chunkLength = randomNumberFromRange(min, max);

  const arrayOfChunks = [];
  const arrayCopy = [...array];

  for(let i = 0; arrayCopy.length > i; i += chunkLength) {
    arrayOfChunks.push(arrayCopy.slice(i, i + chunkLength));
  }

  const lastArrayChunk = arrayOfChunks[arrayOfChunks.length - 1];

  const isArraySplittedCorrectly = lastArrayChunk.length >= 4;

  if(!isArraySplittedCorrectly) {
    return aggregateIntoChunks(arrayCopy);
  }

  return arrayOfChunks;
};

export default aggregateIntoChunks;
