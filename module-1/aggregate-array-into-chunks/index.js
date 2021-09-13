import randomNumberFromRange from './utils';

const alphabet = "abcdefghijklmnoprstuwxyz".split("");

const aggregateIntoChunks = (array) => {
  if(!Array.isArray(array)) {
    throw new Error('Argument array have to be a array');
  }

  const min = 4;
  const max = 7;

  const chunkLength = randomNumberFromRange(min, max);

  const arrayOfChunks = [];

  for(let i = 0; array.length > i; i += chunkLength) {
    arrayOfChunks.push(array.slice(i, i + chunkLength));
  }

  const lastArrayChunk = arrayOfChunks[arrayOfChunks.length - 1];

  const isArraySplittedCorrectly = lastArrayChunk.length >= 4

  if(!isArraySplittedCorrectly) {
    return aggregateIntoChunks(array);
  }

  return arrayOfChunks;
};

const chunks = aggregateIntoChunks(alphabet);

export default chunks;

// chunks:
// [[a,b,c,d,e,f],[g,h,i,j,k],[l,m,n,o,p,r,s],[t,u,w,x,y,z]]
