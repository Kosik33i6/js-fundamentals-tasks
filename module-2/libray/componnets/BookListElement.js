import validators from '../utils';
import Book from './Book';

class BookListElement {
  constructor(book, amount) {
    validators.forClassInstance.isInstanceOfClass(book, Book);
    validators.forNumbers.isPositiveInteger(amount);

    this.book = book;
    this.amount = amount;
  }

  increaseAmount(newAmount) {
    validators.forNumbers.isPositiveInteger(newAmount);
    this.amount += newAmount;
  }

  decreaseAmount(newAmount) {
    validators.forNumbers.isPositiveInteger(newAmount);
    this.amount -= newAmount;
  }
}

export default BookListElement;
