import { errors } from './settings';

const validators = {
  forString: {
    isCorrectString: (stringValue, length, error) => {
      const isCorrectString =
        typeof stringValue === 'string' && stringValue.length >= length;
      if (!isCorrectString) throw new Error(error);
    },
  },

  forImage: {
    isCorrectNodename: (photo, error) => {
      const isCorrectPhoto = photo.nodeName === 'IMG';
      if (!isCorrectPhoto) throw new Error(error);
    },
  },

  forClassInstance: {
    isInstanceOfClass: (
      classInstance,
      classObject,
      error = errors.default.forClassInstance.isInstanceOfClass
    ) => {
      const isInstanceOfClass = classInstance instanceof classObject;
      if (!isInstanceOfClass) throw new Error(error);
    },
  },

  forArray: {
    isArray: (array, error = errors.default.forArray.isArray) => {
      const isArgumentsAreArray = Array.isArray(array);
      if (!isArgumentsAreArray) throw new Error(error);
    },

    isCorrectLength: (
      array,
      error = errors.default.forArray.isCorerectLength
    ) => {
      const isCorerectLength = array.length > 0;
      if (!isCorerectLength) throw new Error(error);
    },

    isInstanceOfClass: (
      array,
      classObject,
      error = errors.default.forClassInstance
    ) => {
      const isArrayElementsAreInstance = array.every(
        (element) => element instanceof classObject
      );
      if (!isArrayElementsAreInstance) throw new Error(error);
    },
  },

  forNumbers: {
    isPositiveInteger: (
      number,
      error = errors.default.forNumber.isPositiveInteger
    ) => {
      const isPositiveInteger = Number.isInteger(number) && number > 0;
      if (!isPositiveInteger) throw new Error(error);
    },
  },
};

export default validators;
