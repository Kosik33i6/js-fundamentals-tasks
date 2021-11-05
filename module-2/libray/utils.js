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
  }
};

export default validators;
