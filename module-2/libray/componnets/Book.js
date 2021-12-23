import { v4 as uuidv4 } from 'uuid';
import validators from '../utils';

class Book {
  constructor(title, author, photo, description) {
    validators.forBook.isCorrectBookData(title, author, photo, description);

    this.title = title;
    this.author = author;
    this.photo = photo;
    this.description = description;
    this.uuid = uuidv4();
  }
}

export default Book;
