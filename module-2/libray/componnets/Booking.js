import Book from './Book';
import User from './User';
import validators from '../utils';

const moment = require('moment');

class Booking {
  constructor(user, bookList) {
    validators.forArray.isArray(bookList);
    validators.forClassInstance.isInstanceOfClass(user, User);

    this.user = user;
    this.rentalDate = moment().format('L');
    this.returnDate = moment(this.rentalDate, 'L').add(7, 'days').format('L');
    this.penalty = 0;
  }

  // returnBook(book) {
  //   validators.forClassInstance.isInstanceOfClass(book, Book);

  //   const currentDate = moment();
  //   const dayDifference = currentDate.diff(this.returnDate, 'days');
  //   const returnedBook = this.removeBook(book);

  //   const isChargePenalty = dayDifference > 0 && this.bookList.length === 0;
  //   if(isChargePenalty) {
  //     this.penalty = dayDifference;
  //     console.log('this.penalty: ', this.penalty);
  //   }
  //   return returnedBook;
  // }
}

export default Booking;
