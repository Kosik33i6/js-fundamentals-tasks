import WithBooksHandling from './WithBooksHandling';
import Booking from './Booking';
import Book from './Book';
import User from './User';
import actions from '../settings';

class Libray extends WithBooksHandling {
  constructor(bookList, userList = []) {
    const isArgumentsAreArray = Array.isArray(bookList) && Array.isArray(userList);
    if(!isArgumentsAreArray) throw new Error('Argument bookList and userList have to be an array');

    super(bookList);
    this.availableBookList = Array.from(bookList);
    this.userList = userList;
    this.bookingList = [];
  }

  borrowBooksFromLibray(bookList, user) {
    this.arrayLengthValidator(bookList);
    this.arrayValidator(bookList);
    this.arrayValidatorForInctanceOfTheClass(bookList, Book);
    this.classObjectValidator(user, User);

    const booksExistsInLibray = this.bookList.filter((librayBook) => bookList.some(book => librayBook === book));

    const isBooksExistsInLibray = booksExistsInLibray.length > 0;
    if(!isBooksExistsInLibray) throw new Error('The library does not contain such a books');

    const avaliableBooks = this.availableBookList.filter((librayBook) => booksExistsInLibray.some(book => librayBook === book));

    const isBooksAvailable = avaliableBooks.length > 0;
    if(!isBooksAvailable) throw new Error('The book is not available');

    const isRegisteredUser = this.userList.includes(user);
    if(!isRegisteredUser) {
      this.addUser(user);
    }

    const booking = new Booking(user, avaliableBooks);
    this.bookingList.push(booking);

    this.updateAvailableBookList(avaliableBooks, actions.remove);
  }

  returnBooksToLibray(booking, books) {
    this.arrayLengthValidator(books);
    this.arrayValidator(books);
    this.arrayValidatorForInctanceOfTheClass(books, Book);
    this.classObjectValidator(booking, Booking);

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

  updateAvailableBookList(books, action) {
    this.arrayLengthValidator(books);
    this.arrayValidator(books);
    this.arrayValidatorForInctanceOfTheClass(books, Book);

    books.forEach(book => {
      const bookIndex = this.availableBookList.indexOf(book);
      const deleteCount = 1;
      if(action === actions.remove) {
        this.availableBookList.splice(bookIndex, deleteCount);
      } else if(action === actions.add) {
        this.availableBookList.push(book);
      }
    });
  }

  addUser(name, surname) {
    const isArgumentsHaveCorrectType = typeof name === 'string' && typeof surname === 'string';
    if(!isArgumentsHaveCorrectType) throw new Error('Argument name and surname have to be a string');

    const isArgumentsHaveCorrectLength = name.length >= 2 && surname.length >= 2;
    if(!isArgumentsHaveCorrectLength) throw new Error('The minimum length of arguments is two');

    const user = new User(name, surname);
    this.userList.push(user);
  }

}

export default Libray;
