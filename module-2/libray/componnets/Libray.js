import Booking from './Booking';
import Book from './Book';
import BookListElement from './BookListElement';
import BookList from './BookList';
import User from './User';
import { actions, BOOKS_DATA_PROPERTY, errors } from '../settings';
import validators from '../validators';

class Libray {
  constructor(userList = [], bookList) {
    validators.forArray.isArray(
      userList,
      errors.forLibray.isTheUserListAnArray
    );
    validators.forArray.isInstanceOfClass(
      userList,
      User,
      errors.forLibray.isTheArgumentAnInstanceOfTheCorrectClass
    );
    validators.forClassInstance.isInstanceOfClass(
      bookList,
      BookList,
      errors.forLibray.isTheArgumentAnInstanceOfTheBookListClass
    );

    this.bookList = bookList;
    this.availableBookList = this.initAvailableBookList(bookList);
    this.userList = userList;
    this.bookingList = [];
  }

  initAvailableBookList({ bookList }) {
    validators.forArray.isInstanceOfClass(bookList, BookListElement);

    const cloneBookList = bookList.map((bookListElement) => {
      const cloneBookListElement = Object.assign(
        Object.create(Object.getPrototypeOf(bookListElement)),
        bookListElement
      );
      return cloneBookListElement;
    });

    return new BookList(cloneBookList);
  }

  addBooks(booksData) {
    validators.forArray.isArray(booksData);
    validators.forArray.isCorrectLength(booksData);

    this.booksDataChecker(booksData);

    booksData.forEach((bookData) => {
      this.bookList.addBook(bookData);
      this.availableBookList.addBook(bookData);
    });
  }

  removeBooks(booksData) {
    validators.forArray.isArray(booksData);
    validators.forArray.isCorrectLength(booksData);

    this.booksDataChecker(booksData);

    booksData.forEach((bookData) => {
      this.bookList.removeBook(bookData);
      this.availableBookList.removeBook(bookData);
    });
  }

  updateAvailableBookList(book, action) {
    validators.forClassInstance.isInstanceOfClass(book, Book);

    const BOOK_AMOUNT = 1;
    const updatedBook = this.availableBookList.searchBook(book);

    switch (action) {
      case actions.bookAmount.decrease:
        this.decreaseBookAmount(updatedBook, book, BOOK_AMOUNT);
        break;
      case actions.bookAmount.increase:
        this.increaseBookAmount(updatedBook, book, BOOK_AMOUNT);
        break;
      default:
        throw new Error(`Action: ${action} doesnt exist.`);
    }
  }

  decreaseBookAmount(updatedBook, book, amount) {
    if (this.availableBookList.getBookAmount(book) === 1) {
      this.availableBookList.removeBook({ book, amount: 1 });
    } else {
      updatedBook.decreaseAmount(amount);
    }
  }

  increaseBookAmount(updatedBook, book, amount) {
    if (!this.availableBookList.doesBookExistInList(book)) {
      this.availableBookList.addBook({ book, amount: 1 });
    } else {
      updatedBook.increaseAmount(amount);
    }
  }

  getBooking(bookList, user) {
    validators.forArray.isArray(bookList);
    validators.forArray.isCorrectLength(bookList);
    validators.forArray.isInstanceOfClass(bookList, Book);
    validators.forClassInstance.isInstanceOfClass(user, User);

    this.checkIfTheUserIsRegistered(user);
    this.checkIfTheUserHasToPayPenalty(user);
    this.checkIfTheBookExistInAvailableBookList(bookList);
    this.checkIfTheBookIsAvailable(bookList);
    this.checkIfTheUserIsNotBorrowingTheSameBooks(bookList);

    if (this.doesTheUserHasBooking(user)) {
      const userBooking = this.getUserBooking(user);
      bookList.forEach((book) => {
        userBooking.addBook(book);
      });
    } else {
      const booking = new Booking(user, bookList);
      this.bookingList.push(booking);
    }

    bookList.forEach((book) => {
      this.updateAvailableBookList(book, actions.bookAmount.decrease);
    });
  }

  returnBooks(bookList, user) {
    validators.forArray.isArray(bookList);
    validators.forArray.isCorrectLength(bookList);
    validators.forArray.isInstanceOfClass(bookList, Book);
    validators.forClassInstance.isInstanceOfClass(user, User);

    this.checkIfTheUserIsRegistered(user);
    this.checkIfTheBookExistsInTheLibrary(bookList);

    if (!this.doesTheUserHasBooking(user)) {
      throw new Error(errors.forUser.doesTheUserHasBooking);
    }
    const userBooking = this.getUserBooking(user);

    bookList.forEach((book) => {
      userBooking.returnBook(book);
      this.updateAvailableBookList(book, actions.bookAmount.increase);
    });
  }

  getUserBooking(user) {
    validators.forClassInstance.isInstanceOfClass(user, User);

    const index = this.bookingList.findIndex(
      (booking) => booking.user.uuid === user.uuid
    );

    return this.bookingList[index];
  }

  addUser(name, surname) {
    validators.forUser.isCorrctUserData(name, surname);

    const user = new User(name, surname);
    this.userList.push(user);
  }

  doesTheUserHasBooking(user) {
    const isUserHaveBooking = this.bookingList.some(
      (booking) => booking.user.uuid === user.uuid
    );
    return isUserHaveBooking;
  }

  checkIfTheUserIsRegistered(user) {
    const isRegisteredUser = this.userList.some(
      (userInList) => userInList.uuid === user.uuid
    );
    if (!isRegisteredUser) throw new Error(errors.forUser.isTheUserRegistered);
  }

  checkIfTheUserHasToPayPenalty(user) {
    const doesTheUserHasToPayPenalty = user.penalty === 0;
    if (!doesTheUserHasToPayPenalty)
      throw new Error(errors.forUser.doesTheUserHasToPayPenalty);
  }

  checkIfTheBookExistInAvailableBookList(bookList) {
    bookList.forEach((book) => {
      const doesTheBookExistInAvailableList = this.availableBookList.doesBookExistInList(
        book
      );
      if (!doesTheBookExistInAvailableList)
        throw new Error(errors.forBook.doesTheBookExistInAvailableList);
    });
  }

  checkIfTheBookIsAvailable(bookList) {
    bookList.forEach((book) => {
      const isTheBookAvailable = this.availableBookList.getBookAmount(book) > 0;
      if (!isTheBookAvailable)
        throw new Error(errors.forBook.isTheBookAvailable);
    });
  }

  checkIfTheBookExistsInTheLibrary(bookList) {
    bookList.forEach((book) => {
      const doesTheBookExistInLibray = this.bookList.doesBookExistInList(book);
      if (!doesTheBookExistInLibray)
        throw new Error(errors.forBook.doesTheBookExistInLibrary);
    });
  }

  checkIfTheUserIsNotBorrowingTheSameBooks(booksData) {
    const duplicates = booksData.filter((book, index, array) => {
      const duplicatesBooksAmount = array.filter(
        (item) => book.uuid === item.uuid
      ).length;
      return duplicatesBooksAmount > 1;
      // if (duplicatesBooksAmount > 1) {
      //   return true;
      // }
      // return false;
    });

    if (duplicates.length === 0)
      throw new Error(errors.forUser.doesTheUserBorrowDuplicates);
  }

  booksDataChecker(booksData) {
    booksData.forEach((data) => {
      const doesTheBookDataHaveAProperty =
        Object.prototype.hasOwnProperty.call(data, BOOKS_DATA_PROPERTY.BOOK) &&
        Object.prototype.hasOwnProperty.call(data, BOOKS_DATA_PROPERTY.AMOUNT);
      if (!doesTheBookDataHaveAProperty) {
        throw new Error(errors.forBook.doesTheBookDataHaveAProperty);
      }
      const { book, amount } = data;
      validators.forClassInstance.isInstanceOfClass(book, Book);
      validators.forNumbers.isPositiveInteger(amount);
    });
  }
}

export default Libray;
