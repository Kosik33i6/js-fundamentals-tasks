import WithBooksHandling from './WithBooksHandling';
import Booking from './Booking';
import Book from './Book';
import User from './User';
import actions from '../settings';

class Libray extends WithBooksHandling {
  constructor(bookList, userList) {
    const isArgumentsAreArray = Array.isArray(bookList) && Array.isArray(userList);
    if(!isArgumentsAreArray) throw new Error('Argument bookList have to be an array');

    super(bookList);

    this.availableBookList = [...bookList];
    this.userList = userList || [];
    this.bookingList = [];
  }

  borrowBookHandling(book, user) {
    this.classObjectValidator(book, Book);
    this.classObjectValidator(user, User);

    const isBookExistsInLibray = this.bookList.some((librayBook) => librayBook === book);
    if(!isBookExistsInLibray) throw new Error('The library does not contain such a book');

    const isBookAvailable = this.availableBookList.some((availableBook) => availableBook === book);
    if(!isBookAvailable) throw new Error('The book is not available');

    const isRegisteredUser = this.userList.includes(user);
    if(!isRegisteredUser) {
      this.addUser(user);
    }

    const booking = new Booking(user);
    booking.addBookToBorrowedBookList(book);
    this.bookingList.push(booking);

    this.updateAvailableBookList(book, actions.remove);
  }

  updateAvailableBookList(book, action) {
    const bookIndex = this.availableBookList.indexOf(book);
    const deleteCount = 1;
    console.log(bookIndex);
    if(action === actions.remove) {
      this.availableBookList.splice(bookIndex, deleteCount);
    } else if(action === actions.add) {
      this.availableBookList.push(book);
    }
  }

  addUser(user) {
    this.userList.push(user);
  }

}

export default Libray;
