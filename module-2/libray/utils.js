export const isBookExistInList = (list, book) => {
  const isExist = list.some(item => item.book === book);
  return isExist;
};

export const isBooksExistInList = (list, books) => {
  console.log(list);
  console.log(books);
}

// export const getArrayElementKeys = (array) => {
//   const elementKeys = array.reduce((previousValue, currentValue) => {
//     // console.log('previousValue: ', previousValue);
//     // console.log('currentValue: ', currentValue);
//     const selectedKeys = Object.keys(currentValue);
//     const keys = new Set([...previousValue, ...currentValue]);
//     return keys;
//   }, []);
// }

const validators = {
  forBook: {
    isCorrectBookData: (title, author, photo, description) => {
      const isBookDataAreStringType = typeof title === 'string' && typeof author === 'string' && typeof description === 'string';
      if(!isBookDataAreStringType) throw new Error('Arguments title, author and description have to be a strong type');

      const isBookDataHaveCorrectLength = title.length >= 2 && author.length >= 2 && description.length >= 10;
      if(!isBookDataHaveCorrectLength) throw new Error('Arguments title, author or description are to short');

      const isIMGElement = photo.nodeName === 'IMG';
      if(!isIMGElement) throw new Error('Photo is not a DOM img element');
    }
  },

  forUser: {
    isCorrctUserData: (name, surname) => {
      const isArgumentsHaveCorrectType = typeof name === 'string' && typeof surname === 'string';
      if(!isArgumentsHaveCorrectType) throw new Error('Argument name and surname have to be a string');

      const isArgumentsHaveCorrectLength = name.length >= 2 && surname.length >= 2;
      if(!isArgumentsHaveCorrectLength) throw new Error('The minimum length of arguments is two');
    }
  },
  forClassInstance: {
    isInstanceOfClass: (classInstance, classObject) => {
      const isInstanceOfClass = classInstance instanceof classObject;
      if(!isInstanceOfClass) throw new Error('Argument have to ba a instance of class');
    }
  },

  forArray: {
    isArray: (array) => {
      const isArgumentsAreArray = Array.isArray(array);
      if(!isArgumentsAreArray) throw new Error('Argument have to be an array');
    },

    isCorrectLength: (array) => {
      const isCorerectLength = array.length > 0;
      if(!isCorerectLength) throw new Error('Array is empty');
    },

    isInstanceOfClass: (array, classObject) => {
      const isArrayElementsAreInstance = array.every(element => element instanceof classObject);
      if(!isArrayElementsAreInstance) throw new Error('Array elements have to be a instance of class');
    },

    // isCorrectObject: (array) => {

    // }
  },

  forNumbers: {
    isPositiveInteger: (number) => {
      const isPositiveInteger = Number.isInteger(number) && number > 0;
      if(!isPositiveInteger) throw new Error('Argument have to be a postitive integer number');
    },
  }
};

export default validators;
