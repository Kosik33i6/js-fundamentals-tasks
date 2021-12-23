import Booking from './Booking';
import Book from './Book';
import BookListElement from './BookListElement';
import BookList from './BookList';
import User from './User';
import {actions} from '../settings';
import validators, {isBookExistInList, isBooksExistInList} from '../utils';

class Libray {
  constructor(bookList = [], userList = []) {
    // validators.forClassInstance.isInstanceOfClass(bookList, BookList);
    validators.forArray.isArray(bookList);
    validators.forArray.isInstanceOfClass(userList, User);
    validators.forArray.isArray(userList);

    this.bookList = this.initBookList(Array.from(bookList));
    this.availableBookList = this.initBookList(Array.from(bookList));
    this.userList = userList;
    this.bookingList = [];
  }

  initBookList(booksData) {
    const bookList = new BookList(booksData);
    return bookList;
  }

  addBooks(booksData) {
    validators.forArray.isArray(booksData);
    validators.forArray.isCorrectLength(booksData);

    booksData.forEach(bookElement => {
      const  {title, author, photo, description, amount} = bookElement;
      this.bookList.addBook(title, author, photo, description, amount);
      // this.updateAvailableBookList(book, amount, actions.bookList.add);
    });
  }

  removeBooks(books) {
    validators.forArray.isArray(books);
    validators.forArray.isCorrectLength(books);

    // books.forEach(bookElement => {
    //   const  {title, author, photo, description, amount} =
    //   this.bookList.removeBook(book, amount);
    //   this.updateAvailableBookList(book, amount, actions.bookList.remove);
    // });
  }

  updateAvailableBookList(book, amount, action) {
    if(action === actions.bookList.remove) {
        this.availableBookList.removeBook(book, amount);
      } else if(action === actions.bookList.add) {
        this.availableBookList.addBook(book, amount);
      }
  }


  borrowBooksHandling(bookList, user) {;
    validators.forArray.isCorrectLength(bookList);
    validators.forArray.isArray(bookList);
    validators.forArray.isInstanceOfClass(bookList, Book);
    validators.forClassInstance.isInstanceOfClass(user, User);


    // const {isExist, item} = Utils.isExistInList(bookings, booking, 'Errr...')
    // const {isExist, item} = Utils.isExistInList(bookList, book)
    // const {isExist, item} = Utils.isExistInList(userList, user)

    const isBookExist = isBooksExistInList(this.bookList, bookList);


    const booksExistsInLibray = this.bookList.filter((librayBook) => bookList.some(book => librayBook === book)); // po uuid

    const isBooksExistsInLibray = booksExistsInLibray.length > 0;
    if(!isBooksExistsInLibray) throw new Error('The library does not contain such a books');

    const avaliableBooks = this.availableBookList.filter((librayBook) => booksExistsInLibray.some(book => librayBook === book));

    const isBooksAvailable = avaliableBooks.length > 0;
    if(!isBooksAvailable) throw new Error('The book is not available');

    const isRegisteredUser = this.userList.some(user);
    // TODO Error jeśli użytkownik nie istnieje
    if(!isRegisteredUser) throw new Error('User is not Exist');

    const booking = new Booking(user, avaliableBooks);
    this.bookingList.push(booking);

    this.updateAvailableBookList(avaliableBooks, actions.remove);
  }

  returnBooksHandling(booking, books) {
    validators.forArray.isCorrectLength(books);
    validators.forArray.isArray(books);
    validators.forArray.isInstanceOfClass(books, Book);
    validators.forClassInstance.isInstanceOfClass(booking, Booking);

    const isBookingExistInBookingList = this.bookingList.some(bookingInList => bookingInList === booking);
    if(!isBookingExistInBookingList) throw new Error('Reservation does not exist');

    const booksExistsInBooking = booking.bookList.filter(bookingBook => books.some(book => bookingBook === book));

    const isBooksExistsInBooking = booksExistsInBooking.length === books.length;
    if(!isBooksExistsInBooking) throw new Error('You didn\'t borrow those books');

    const returnedBooks = books.reduce((previousValue, currentValue) => {
      previousValue.push(booking.returnBook(currentValue));
      return previousValue;
    }, []);

    this.updateAvailableBookList(returnedBooks, actions.add);
    console.log(this.availableBookList);
  }



  addUser(name, surname) {
    validators.forUser.isCorrctUserData(name, surname);

    const user = new User(name, surname);
    this.userList.push(user);
  }
}

export default Libray;
