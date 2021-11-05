const inputData = ['orange', 'APPLE', 'strawberry', 'cherry', 'KIWI FRUIT', 'Orange', 'apple', 'banana', 'STRAWBERRY', 'blueberry', 'Blueberry', 'mango', 'gooseberry', 'Blackberry', 'grapefruit', 'kiwi fruit'];

const findPhraseInArray = (array, phrase) => {

  const isArray = Array.isArray(array);
  if(!isArray) throw new Error('Argument array have to be an array');

  const isArrayContainValue = array.length > 0;
  if(!isArrayContainValue) throw new Error('Argument array is empty');

  const isString = typeof phrase === 'string';
  if(!isString) throw new Error('Argument phrase have to be a string type');

  const isPhraseHaveCorrectlyLength = phrase.length >= 1;
  if(!isPhraseHaveCorrectlyLength) throw new Error('Argument phrase is too short');

  const arrayCopy = Array.from(array);
  const regExpForSearchingPhrase = new RegExp(phrase.trim(), 'gi');
  const result = arrayCopy.reduce((accumulator, currentValue, index) => {
    const isValueContainPhrase = regExpForSearchingPhrase.test(currentValue.trim());
    if(isValueContainPhrase) {
      accumulator.push([currentValue, index]);
    }
    return accumulator;
  }, []);
  return result;

};

const result = findPhraseInArray(inputData, '     berry   ');
console.log(result);

