// actualPageIdx to index wybranej strony (indexujemy od 0)
// entriesOnPage to maksymalna zwracana ilość elementów z dataEntries dla wybranej strony

// przykładowe dane
const data = [1,2,3,4,5,6,7,8,9,10];
const settings = { actualPageIdx: 2, entriesOnPage: 4 };

const paginateArray = (dataEntries, paginateSettings) => {
  const isArray = Array.isArray(dataEntries);
  if(!isArray) throw new Error('Argument dataEntries have to ba an array');

  const {actualPageIdx, entriesOnPage} = paginateSettings;
  const numberOfPages = dataEntries.length % entriesOnPage === 0 ?
                        Math.floor(dataEntries.length / entriesOnPage) :
                        Math.floor(dataEntries.length / entriesOnPage) + 1;
  console.log(numberOfPages);

  const isInteger = Number.isInteger(actualPageIdx) && Number.isInteger(entriesOnPage);
  if(!isInteger) throw new Error('actualPageIndex and entriesOnPage have to be a integer');

  const isPositiveNumbers = actualPageIdx >= 0 && entriesOnPage >= 0;
  if(!isPositiveNumbers) throw new Error('actualPageIndex and entriesOnPage cannot be a negative number');

  const isCorrectActualPageIndex = actualPageIdx < numberOfPages;
  if(!isCorrectActualPageIndex) throw new Error('Selected page does not exist');

  const dataEntriesCopy = [...dataEntries];
  const entriesOnSelectedPage = [];

  for(let i = 0; dataEntriesCopy.length > i; i += entriesOnPage) {
    entriesOnSelectedPage.push(dataEntriesCopy.slice(i, i + entriesOnPage));
  }

  return entriesOnSelectedPage[actualPageIdx];
};

const result = paginateArray(data, settings);
// result === [3,4]
console.log(result);
