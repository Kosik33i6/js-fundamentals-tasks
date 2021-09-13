function recursivePromise(arrayOfPromises, actualIndex = 0, results = []){

  const isArray = Array.isArray(arrayOfPromises) && Array.isArray(results)
  if(!isArray) throw new Error('Argument arrayOfPromises and results have to be an array');

  const isIndexHaveCorrectlyLength = actualIndex >= 0 && actualIndex > arrayOfPromises.length - 1;
  if(isIndexHaveCorrectlyLength) throw new Error('Incorrect index');

  const arrayOfPromisesResult = arrayOfPromises[actualIndex].then(response => {
    results.push(response);
    const index = actualIndex + 1;

    const isIndexGreaterThenArrayLength = actualIndex >= arrayOfPromises.length - 1;
    if(!isIndexGreaterThenArrayLength) {
      recursivePromise(arrayOfPromises, index, results);
    }
    // console.log('results arrayOfPromises: ', results);
    return results;
  })
    .catch(error => {
      throw new Error(error);
    });
  return arrayOfPromisesResult;
}

export default recursivePromise;
