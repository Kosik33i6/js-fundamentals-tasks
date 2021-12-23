import validators, {isBookExistInList} from '../utils';
import {errors} from '../settings';
import BookListElement from './BookListElement';
import Book from './Book';

class BookList {
  constructor(booksData) {
    validators.forArray.isArray(booksData);

    this.books = this.initBookListElement(booksData);
  }

  initBookListElement(booksData) {
    const list = booksData.map(bookData => {
      const {title, author, photo, description, amount} = bookData;
      const book = this.initBook(title, author, photo, description);
      const bookListElement = new BookListElement(book, amount);
      return bookListElement;
    });

    return list;
  }

  initBook(title, author, photo, description) {
    const book = new Book(title, author, photo, description);
    return book;
  }

  addBook(book, amount) {
    validators.forClassInstance.isInstanceOfClass(book, Book);
    validators.forNumbers.isPositiveInteger(amount);

    const isExist = isBookExistInList(this.books, book);
    if(!isExist) {
      const bookListItem = new BookListElement(book, amount);
      this.books.push(bookListItem);
    } else {
      const index = this.getBookIndex(book);
      this.books[index].increaseAmount(amount);
    }
  }

  removeBook(book, amount) {
    validators.forClassInstance.isInstanceOfClass(book, Book);
    validators.forNumbers.isPositiveInteger(amount);

    const isExist = isBookExistInList(this.books, book);
    if(!isExist) throw new Error(errors.book.isNotExist);

    const index = this.getBookIndex(book);

    const bookAmount = this.books[index].amount;

    const isPositiveAmount = (bookAmount - amount) >= 1;
    if(!isPositiveAmount) {
      this.books.splice(index, 1);
    } else {
      this.books[index].decreaseAmount(amount);
    }
  }

  getBookIndex(book) {
    return this.books.findIndex(listElement => listElement.book === book);
  }

}

export default BookList;
