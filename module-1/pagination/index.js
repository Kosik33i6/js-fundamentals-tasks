// TODO Stwórz funkcję paginateArray, która przyjmuje jako 1 argument tablicę, a jako 2 argument obiekt settings z następującymi kluczami :
// TODO „actualPageIndex” - numer strony
// TODO „entriesOnPage” – ilośc obiektów na pojedynczej stronie
// TODO Funkcja zwraca entriesOnSelectedPage, który jest arrayem podzielonym według ustawień z settings

// actualPageIdx to index wybranej strony (indexujemy od 0)
// entriesOnPage to maksymalna zwracana ilość elementów z dataEntries dla wybranej strony

// przykładowe dane
const data = [1,2,3,4,5,6,7,8,9,10,11,12,13];
const settings = { actualPageIdx: 2, entriesOnPage: 5 };

const paginateArray = (dataEntries, paginateSettings) => {
  const isArray = Array.isArray(dataEntries);
  if(!isArray) throw new Error('Argument dataEntries have to ba an array');

  const {actualPageIdx, entriesOnPage} = paginateSettings;
  const numberOfPages = dataEntries.length % entriesOnPage === 0 ?
                        Math.floor(dataEntries.length / entriesOnPage) :
                        Math.floor(dataEntries.length / entriesOnPage) + 1;

  const isInteger = Number.isInteger(actualPageIdx) && Number.isInteger(entriesOnPage);
  if(!isInteger) throw new Error('actualPageIndex and entriesOnPage have to be a integer');

  const isPositiveNumbers = actualPageIdx >= 0 && entriesOnPage >= 0;
  if(!isPositiveNumbers) throw new Error('actualPageIndex and entriesOnPage cannot be a negative number');

  const isCorrectActualPageIndex = actualPageIdx < numberOfPages;
  if(!isCorrectActualPageIndex) throw new Error('Selected page does not exist');

  const dataEntriesCopy = [...dataEntries];
  const startIndex = entriesOnPage * actualPageIdx ;
  const endIndex = entriesOnPage * actualPageIdx + entriesOnPage;

  return dataEntriesCopy.slice(startIndex, endIndex);
};

const result = paginateArray(data, settings);

console.log(result);
