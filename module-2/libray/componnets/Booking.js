import Book from './Book';
import User from './User';
import WithBooksHandling from './WithBooksHandling';

const moment = require('moment');

class Booking extends WithBooksHandling {
  constructor(user) {
    super([]);

    this.classObjectValidator(user, User);

    this.user = user;
    this.rentalDate = moment('09-22-2021').format('L');
    this.returnDate = moment(this.rentalDate, 'L').add(7, 'days').format('L');
    // this.borrowedBookList = [];
    this.penalty = 0;
  }

  // addBookToBorrowedBookList(book) {
  //   this.classObjectValidator(book, Book);
  //   this.borrowedBookList.push(book);
  // }

  // removeBookFromBorrowedBookList(book) {
  //   this.classObjectValidator(book, Book);
  //   const bookIndex = this.borrowedBookList.indexOf(book);
  //   console.log(bookIndex);
  //   const deleteCount = 1;
  //   const removedBook = this.borrowedBookList.splice(bookIndex, deleteCount);
  //   return removedBook;
  // }

  returnBook(book) {
    this.classObjectValidator(book, Book);
    const currentDate = moment();
    const dayDifference = currentDate.diff(this.returnDate, 'days');

    if(dayDifference > 0) {
      this.penalty = dayDifference;
    }
    const returnedBook = this.removeBookFromBorrowedBookList(book);
    return returnedBook;
  }

  // classObjectValidator(classInstance, classObject) {
  //   const isBookInstance = classInstance instanceof classObject;
  //   if(!isBookInstance) throw new Error('Argument have to ba a instance of class');
  // }

}

export default Booking;
