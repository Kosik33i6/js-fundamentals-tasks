function includes(array, elementToFind, fromIndex = 0) {

  if(!Array.isArray(array)) {
    throw new Error('Parameter array does not contain an array');
  }
  if(elementToFind === undefined) {
    throw new Error('Parameter elementToFind cannot be undefined');
  }
  if(typeof fromIndex !== 'number' && fromIndex < 0) {
    throw new Error('Parameter fromIndex must be a typeof number');
  }

  for(let i = fromIndex; i < array.length; i += 1) {
    if(array[i] === elementToFind) {
      return true;
    }
  }
  return false;
}

export default includes;
