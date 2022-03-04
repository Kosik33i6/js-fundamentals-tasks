import Libray from './componnets/Libray';
import User from './componnets/User';
import Booking from './componnets/Booking';
import Book from './componnets/Book';
import BookListElement from './componnets/BookListElement';
import BookList from './componnets/BookList';

const images = document.querySelectorAll('img');

const book1 = new Book('title1', 'aothor1', images[0], 'desription1');
const book2 = new Book('title2', 'aothor2', images[1], 'desription2');
const book3 = new Book('title3', 'aothor3', images[2], 'desription3');
const book4 = new Book('title4', 'aothor4', images[0], 'desription4');
const book5 = new Book('title5', 'aothor5', images[1], 'desription5');

const bookListEl1 = new BookListElement(book1, 3);
const bookListEl2 = new BookListElement(book2, 4);
const bookListEl3 = new BookListElement(book3, 2);
// const bookListEl4 = new BookListElement(book4, 7);
// const bookListEl5 = new BookListElement(book5, 4);

const bookListArr = [bookListEl1, bookListEl2, bookListEl3];

const bookList = new BookList(bookListArr);

// const bookData = [
//   {
//     title: 'title1',
//     author: 'author1',
//     photo: images[0],
//     description: 'desription1',
//     amount: 1,
//   },
//   {
//     title: 'title2',
//     author: 'author2',
//     photo: images[0],
//     description: 'desription2',
//     amount: 3,
//   },
//   {
//     title: 'title3',
//     author: 'author3',
//     photo: images[0],
//     description: 'desription3',
//     amount: 2,
//   },
//   {
//     title: 'title4',
//     author: 'author4',
//     photo: images[0],
//     description: 'desription4',
//     amount: 1,
//   },
// ];

// const bookData2 = [
//   {
//     title: 'title1',
//     author: 'author1',
//     photo: images[0],
//     description: 'desription1',
//     amount: 1,
//   },
//   {
//     title: 'title5',
//     author: 'author5',
//     photo: images[0],
//     description: 'desription5',
//     amount: 4,
//   },
//   {
//     title: 'title6',
//     author: 'author6',
//     photo: images[0],
//     description: 'desription6',
//     amount: 3,
//   },
// ];

const user1 = new User('Marek', 'Węgrzyn');
const user2 = new User('Michał', 'Bober');
const users = [user1, user2];

const libray = new Libray(users, bookList);
libray.addBooks([
  { book: book4, amount: 7 },
  { book: book5, amount: 1 },
  { book: book1, amount: 7 },
  { book: book5, amount: 5 },
]);

libray.removeBooks([
  { book: book1, amount: 7 },
  { book: book4, amount: 2 },
  { book: book5, amount: 1 },
]);

libray.getBooking([book5, book3, book1], user1);
// libray.getBooking([book1, book3], user1);
// libray.getBooking([book2], user1);

// libray.returnBooks([book5], user1);

console.log(libray);
