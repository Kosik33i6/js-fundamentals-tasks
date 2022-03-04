export const actions = {
  bookList: {
    remove: 'remove',
    add: 'add',
  },

  bookAmount: {
    change: 'change',
    decrease: 'decrease',
    increase: 'increase',
    default: 'default',
  },
};

export const BOOKS_DATA_PROPERTY = {
  BOOK: 'book',
  AMOUNT: 'amount',
};

export const errors = {
  forBook: {
    doesBookHaveCorrectTitle:
      'An error occurred while creating instance for Book class: argument title is invalid.',
    doesBookHaveCorrectAuthor:
      'An error occurred while creating instance for Book class: argument author is invalid.',
    doesBookHaveCorrectDescription:
      'An error occurred while creating instance for Book class: argument description is invalid.',
    doesBookHaveCorrectPhoto:
      'An error occurred while creating instance for Book class: argument photo is not a DOM img element.',
    doesTheBookExistInLibrary:
      'An error occurred while invoke function returnBooks: the book you want to remove is not exist in libray.',
    doesTheBookExistInAvailableList:
      'An error occurred while invoke function: the book you want to reserve is not exist.',
    isTheBookAvailable:
      'An error occurred while invoke function: the book you want to reserve is not available.',
    doesTheBookDataHaveAProperty:
      'An error occurred while invoke method booksDataChecker: argument booksData is invalid.',
    doesTheBookExist:
      'An error occurred while invoke function: the book you are looking for does not exist.',
  },

  forBooking: {
    doesBookingHaveCorrectUser:
      'An error occurred while creating instance for Booking class: Argument user have to ba a instance of class User.',
    doesBookingHaveCorrectBookList:
      'An error occurred while creating instance for Booking class: Argument bookList have to ba an array.',
    isTheBookListElementAnInstanceOfBookClass:
      'An error occurred while creating instance for Booking class: Argument bookList have to ba a instance of class.',
  },

  forBookList: {
    isTheBookListAnArray:
      'An error occurred while creating instance for BookList class: Argument bookList have to be an array.',
    isTheBookListElementAnInstanceOfBookListElementClass:
      'An error occurred while creating instance for BookList class: bookList element have to be a instance of BookListElement class.',
  },

  forBookListElement: {
    doesBookListElementHaveCorrectBook:
      'An error occurred while creating instance for BookListElement class: Argument book have to ba a instance of class Book.',
    doesBookListElementHaveCorrectAmount:
      'An error occurred while creating instance for BookListElement class: Argument amount have to be a positive integer number.',
  },

  forLibray: {
    isTheUserListAnArray:
      'An error occurred while creating instance for Libray class: Argument userList have to ba an array.',
    isTheArgumentAnInstanceOfTheCorrectClass:
      'An error occurred while creating instance for Libray class: userList element have to ba a instance of User class.',
    isTheArgumentAnInstanceOfTheBookListClass:
      'An error occurred while creating instance for Libray class: bookList have to ba a instance of BookList class.',
  },

  forUser: {
    doesUserHaveCorrectName:
      'An error occurred while creating instance for User class: argument name is invalid.',
    doesUserHaveCorrectSurname:
      'An error occurred while creating instance for User class: argument surname is invalid.',
    isTheUserRegistered:
      'An error occurred while invoke method: user is not registered.',
    doesTheUserHasToPayPenalty:
      'An error occurred while invoke method: the user must pay the penalty first.',
    doesTheUserHasBooking:
      'An error occurred while invoke function: the user did not borrow these books.',
    hasTheUserAlreadyBoorrowedBook:
      'An error occurred while invoke function: you already borrowed this book',
    doesTheUserBorrowDuplicates:
      'An error occurred while invoke function: you cannot borrow duplicates',
  },

  default: {
    forArray: {
      isArray:
        'An error occurred while invoke function: Argument have to be an array.',
      isCorerectLength:
        'An error occurred while invoke function: Array is empty.',
    },

    forNumber: {
      isPositiveInteger:
        'An error occurred while invoke function: Argument have to be a postitive integer number.',
    },

    forClassInstance: {
      isInstanceOfClass:
        'An error occurred while invoke function: Argument have to be a instance of class.',
    },
  },
};
