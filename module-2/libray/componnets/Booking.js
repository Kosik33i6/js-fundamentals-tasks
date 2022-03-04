import Book from './Book';
import User from './User';
import BookListElement from './BookListElement';
import BookList from './BookList';
import validators from '../validators';
import { errors } from '../settings';
import inidDates from '../utils';

const dayjs = require('dayjs');
const relativeTime = require('dayjs/plugin/relativeTime');

dayjs.extend(relativeTime);

class Booking {
  constructor(user, bookList) {
    validators.forClassInstance.isInstanceOfClass(
      user,
      User,
      errors.forBooking.doesBookingHaveCorrectUser
    );
    validators.forArray.isArray(
      bookList,
      errors.forBooking.doesBookingHaveCorrectBookList
    );
    validators.forArray.isInstanceOfClass(
      bookList,
      Book,
      errors.forBooking.isTheBookListElementAnInstanceOfBookClass
    );

    this.user = user;
    this.bookList = this.getBookList(bookList);
  }

  getBookList(bookList) {
    // const newBookList = bookList.map((book) => {
    //   return this.getBookListElement(book);
    // });

    const newBookList = bookList.reduce((prevValue, currentValue) => {
      return this.getBookListElement(currentValue);
    }, []);

    // console.log(newBookList);
    // console.log(newBookList2);

    // TODO use Reducer
    // ksiazka 1
    // ksiazka 1
    // ksiazka 1

    // ksiazka 3

    return new BookList(Array.from(newBookList));
  }

  getBookListElement(book) {
    const bookListElement = new BookListElement(book, 1);
    inidDates(bookListElement);

    return bookListElement;
  }

  addBook(book) {
    validators.forClassInstance.isInstanceOfClass(book, Book);
    this.checkIfTheUserHasBorrowedTheBook(book);

    this.bookList.addBook(this.getBookListElement(book), true);
  }

  returnBook(book) {
    validators.forClassInstance.isInstanceOfClass(book, Book);

    const currentDate = dayjs();
    const returnDate = dayjs(this.bookList.searchBook(book).returnDate).format(
      'YYYY-MM-DD'
    );

    const dayDifference = currentDate.diff(returnDate, 'day');

    this.bookList.removeBook({ book, amount: 1 });
    this.setPenaltyForUser(dayDifference);
  }

  setPenaltyForUser(dayDifference) {
    if (dayDifference > 0) {
      this.user.penalty += dayDifference;
    }
  }

  checkIfTheUserHasBorrowedTheBook(book) {
    const hasTheUserAlreadyBoorrowedBook = this.bookList.doesBookExistInList(
      book
    );
    console.log(hasTheUserAlreadyBoorrowedBook);
    if (hasTheUserAlreadyBoorrowedBook)
      throw new Error(errors.forUser.hasTheUserAlreadyBoorrowedBook);
  }
}

export default Booking;
