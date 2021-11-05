import Libray from './componnets/Libray';
import User from './componnets/User';
import Booking from './componnets/Booking';
import Book from './componnets/Book';

const images = document.querySelectorAll('img');

const user1 = new User('Marek', 'Węgrzyn');
const user2 = new User('Michał', 'Bober');
const users = [user1, user2];

const image = document.createElement('img');

const book1 = new Book('title1', 'author1', images[0], 'desription1');
const book2 = new Book('title2', 'author2', images[1], 'desription2');
const book3 = new Book('title3', 'author3', images[2], 'desription3');
const book4 = new Book('title4', 'author4', image, 'desription4');
const books = [book1, book2, book3, book4];


// ! Libray
const libray = new Libray(books, users);
console.log(libray);
libray.borrowBooksFromLibray([book1, book4], user1);
libray.returnBooksToLibray(libray.bookingList[0], [book1, book4]);



