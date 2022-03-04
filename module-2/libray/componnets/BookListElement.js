import Book from './Book';
import validators from '../validators';
import { errors } from '../settings';

class BookListElement {
  constructor(book, amount) {
    validators.forClassInstance.isInstanceOfClass(
      book,
      Book,
      errors.forBookListElement.doesBookListElementHaveCorrectBook
    );
    validators.forNumbers.isPositiveInteger(
      amount,
      errors.forBookListElement.doesBookListElementHaveCorrectAmount
    );

    this.book = book;
    this.amount = amount;
    this.bookingDate = null;
    this.returnDate = null;
  }

  increaseAmount(newAmount) {
    validators.forNumbers.isPositiveInteger(newAmount);
    this.amount += newAmount;
  }

  decreaseAmount(newAmount) {
    validators.forNumbers.isPositiveInteger(newAmount);
    this.amount -= newAmount;
  }

  setBookingDate(date) {
    this.bookingDate = date;
  }

  setReturnDate(date) {
    this.returnDate = date;
  }
}

export default BookListElement;
