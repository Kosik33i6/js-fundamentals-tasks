import compareNumeric from './utils';

/**
 * TODO: Utwórz funkcję, która jako argumenty przyjmie trzy liczby. Funkcja powinna zwrócić true jeśli z odcinków o długości przekazanych w argumentach można        zbudować trójkąt prostokątny. Jeżeli z podanych boków nie można stworzyć trójkąta prostokątnego funkcja powinna zwrócić odpowiednią informację
 */

function isRectangularTriangle(x1, x2, x3) {
  const allArgumentsAreNumbers = typeof (x1 * x2 * x3) === 'number';
  const isArgumentsAreInteger = !Number.isInteger(x1) || !Number.isInteger(x2) || !Number.isInteger(x3);
  const isArgumentsArePositiveNumber = x1 > 0 || x2 > 0 || x3 > 0;

  if(!allArgumentsAreNumbers){
    throw new Error('All arguments have to be numbers');
  }

  if(isArgumentsAreInteger) {
    throw new Error('All arguments have to be integer');
  }

  if(!isArgumentsArePositiveNumber) {
    throw new Error('All arguments have to be positive number');
  }

  const [a, b, c] = [x1, x2, x3].sort(compareNumeric);
  const isRectangular = a ** 2 + b ** 2 === c ** 2;

  return isRectangular;
}

export default isRectangularTriangle;
