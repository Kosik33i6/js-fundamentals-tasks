import actions from './settigs';

const validators = {
  forString: {
    isCorrectString: (string) => {
      const isArgumentStringType = typeof string === 'string' && string.length >= 2;
      if(!isArgumentStringType) throw new Error('Argument is not valid');
    },
  },

  forArray: {
    isArray: (array) => {
      const isArray = Array.isArray(array);
      if(!isArray) throw new Error('Argument have to be an array');
    },

    isListOfStrings: (array) => {
      const isArrayContainElements = array.length > 0;
      if(!isArrayContainElements) return;

      const isArrayElementsHaveCorrectType =array.every(element => typeof element === 'string');
      if(!isArrayElementsHaveCorrectType) throw new Error('Array elements have to be a string');
    },

    isListOfProduct: (array, classObject) => {
      const isArrayContainElements = array.length > 0;
      if(!isArrayContainElements) return;

      const isArrayElementsHaveCorrectType =array.every(element => element instanceof classObject);
      if(!isArrayElementsHaveCorrectType) throw new Error('Array elements have to be a instance of class');
    },
  },

  forNumber: {
    isPositive: (number) => {
      const isCorrectNumber = typeof number  === 'number' && number > 0;
      if(!isCorrectNumber) throw new Error('Argument number is invalid');
    },

    isInteger: (number) => {
      const isInteger = Number.isInteger(number);
      if(!isInteger) throw new Error('Number have to be integer');
    },

    isFinite: (number) => {
      const isFinite = Number.isFinite(number);
      if(!isFinite) throw new Error('Number have to be finite');
    },

    isCorrectDiscount(discount) {
      const isCorrectDiscount = discount <= 100 && discount >= 0;
      if(!isCorrectDiscount) throw new Error('Discount have incorrect value');
    },

    isCorrectIndex: (index, array) => {
      const isIndexInteger = Number.isInteger(index);
      if(!isIndexInteger) throw new Error('Argument index have to be a integer');

      const IsIndexHaveCorrectlyValue = index >= 0 && index < array.length;
      if(!IsIndexHaveCorrectlyValue) throw new Error('Argument index is too low or too high');
    }
  },

  forClassInstance: {
    isInstanceOfClass: (classInstance, classObject) => {
      const isInstanceOfClass = classInstance instanceof classObject;
      if(!isInstanceOfClass) throw new Error('Argument have to ba a instance of class');
    }
  },

  forActions: {
    isCorrectActionToChangeAmount: (action) => {
      const isCorrectAction = action === actions.productAmount.change || action === actions.productAmount.decrease || action === actions.productAmount.increase ||action === actions.productAmount.default;
      if(!isCorrectAction) throw new Error('Invalid action');
    }
  }
};

export default validators;
