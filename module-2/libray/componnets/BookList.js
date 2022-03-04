import BookListElement from './BookListElement';
import Book from './Book';
import validators from '../validators';
import { errors } from '../settings';
import inidDates from '../utils';

const dayjs = require('dayjs');
const relativeTime = require('dayjs/plugin/relativeTime');

dayjs.extend(relativeTime);

class BookList {
  constructor(bookList) {
    validators.forArray.isArray(
      bookList,
      errors.forBookList.isTheBookListAnArray
    );
    validators.forArray.isInstanceOfClass(
      bookList,
      BookListElement,
      errors.forBookList.isTheBookListElementAnInstanceOfBookListElementClass
    );

    this.bookList = Array.from(bookList);
  }

  addBook({ book, amount }, booking = false) {
    validators.forClassInstance.isInstanceOfClass(book, Book);
    validators.forNumbers.isPositiveInteger(amount);

    const doesExist = this.doesBookExistInList(book);

    if (!doesExist) {
      const bookListElement = new BookListElement(book, amount);
      // TODO pRzenieść logikę
      // if (booking) bookListElement.initDates();
      if (booking) {
        inidDates(bookListElement);
      }
      this.bookList.push(bookListElement);
    } else {
      const bookFromList = this.searchBook(book);
      bookFromList.increaseAmount(amount);
    }
  }

  removeBook({ book, amount }) {
    validators.forClassInstance.isInstanceOfClass(book, Book);
    validators.forNumbers.isPositiveInteger(amount);

    const isExist = this.doesBookExistInList(book);
    if (!isExist) throw new Error(errors.forBook.doesTheBookExistInLibrary);

    const bookToRemove = this.searchBook(book);

    if (bookToRemove.amount > amount) {
      bookToRemove.decreaseAmount(amount);
    } else {
      const index = this.getBookIndex(book);
      this.bookList.splice(index, 1);
    }
  }

  searchBook(book) {
    validators.forClassInstance.isInstanceOfClass(book, Book);

    const index = this.getBookIndex(book);
    if (index === -1) throw new Error(errors.forBook.doesTheBookExist);

    return this.bookList[index];
  }

  getBookIndex(book) {
    validators.forClassInstance.isInstanceOfClass(book, Book);

    return this.bookList.findIndex(
      (listElement) => listElement.book.uuid === book.uuid
    );
  }

  getBookAmount(book) {
    validators.forClassInstance.isInstanceOfClass(book, Book);

    return this.searchBook(book).amount;
  }

  doesBookExistInList(book) {
    validators.forClassInstance.isInstanceOfClass(book, Book);

    const doesExist = this.bookList.some(
      (bookInList) => bookInList.book.uuid === book.uuid
    );
    return doesExist;
  }
}

export default BookList;
