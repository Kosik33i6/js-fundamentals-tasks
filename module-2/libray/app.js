import Libray from './componnets/Libray';
import User from './componnets/User';
import Booking from './componnets/Booking';
import Book from './componnets/Book';
import BookListElement from './componnets/BookListElement';
import BookList from './componnets/BookList';

const images = document.querySelectorAll('img');

const bookData = [
  {title: 'title1', author: 'author1', photo: images[0], description: 'desription1', amount: 1},
  {title: 'title2', author: 'author2', photo: images[0], description: 'desription2', amount: 3},
  {title: 'title3', author: 'author3', photo: images[0], description: 'desription3', amount: 2},
  {title: 'title4', author: 'author4', photo: images[0], description: 'desription4', amount: 1},
];

const bookData2 = [
  {title: 'title1', author: 'author1', photo: images[0], description: 'desription1', amount: 1},
  {title: 'title5', author: 'author5', photo: images[0], description: 'desription5', amount: 4},
  {title: 'title6', author: 'author6', photo: images[0], description: 'desription6', amount: 3},
];

const user1 = new User('Marek', 'Węgrzyn');
const user2 = new User('Michał', 'Bober');
const users = [user1, user2];

const libray = new Libray(bookData, users);

libray.addBooks(bookData2);

// libray.removeBooks([{book: book1, amount: 2}]);

// libray.borrowBooksHandling([book4, book5], user1);
console.log(libray);



