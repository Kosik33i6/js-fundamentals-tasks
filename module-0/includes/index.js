function includes(array, elementToFind, fromIndex = 0) {

  /**
   * TODO: Stwórz funkcję, która działa podobnie do array.includes(element)
   * TODO: Funkcja szuka czy w tablicy znajduje się podany element, jeśli znajdzie pierwszy pasujący element to funkcja przerywa iterację po arrayu i zwraca true
   * TODO: Nie zapomnij o tym że funkcja includes zawiera argument fromIndex, który w swoim rozwiązaniu powinieneś uwzględnić
   */

  if(!Array.isArray(array)) {
    throw new Error('Parameter array does not contain an array');
  }
  if(elementToFind === undefined) {
    throw new Error('Parameter elementToFind cannot be undefined');
  }
  if(typeof fromIndex !== 'number' && fromIndex < 0) {
    throw new Error('Parameter fromIndex must be a typeof number');
  }

  const arrayCopy = [...array];

  for(let i = fromIndex; i < arrayCopy.length; i += 1) {
    if(arrayCopy[i] === elementToFind) {
      return true;
    }
  }
  return false;
}

export default includes;
