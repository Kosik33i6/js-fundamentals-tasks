import Book from './Book';
import User from './User';
import WithBooksHandling from './WithBooksHandling';

const moment = require('moment');

class Booking extends WithBooksHandling {
  constructor(user, bookList) {
    const isArgumentsAreArray = Array.isArray(bookList);
    if(!isArgumentsAreArray) throw new Error('Argument bookList have to be an array');
    super(bookList);

    this.classObjectValidator(user, User);

    this.user = user;
    this.rentalDate = moment().format('L');
    this.returnDate = moment(this.rentalDate, 'L').add(7, 'days').format('L');
    this.penalty = 0;
  }

  returnBook(book) {
    this.classObjectValidator(book, Book);

    const currentDate = moment();
    const dayDifference = currentDate.diff(this.returnDate, 'days');
    const returnedBook = this.removeBookFromBookList(book);

    const isChargePenalty = dayDifference > 0 && this.bookList.length === 0;
    if(isChargePenalty) {
      this.penalty = dayDifference;
      console.log('this.penalty: ', this.penalty);
    }
    return returnedBook;
  }
}

export default Booking;
