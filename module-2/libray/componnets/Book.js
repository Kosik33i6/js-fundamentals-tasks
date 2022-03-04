import { v4 as uuidv4 } from 'uuid';
import validators from '../validators';
import { errors } from '../settings';

class Book {
  constructor(title, author, photo, description) {
    validators.forString.isCorrectString(
      title,
      2,
      errors.forBook.doesBookHaveCorrectTitle
    );
    validators.forString.isCorrectString(
      author,
      2,
      errors.forBook.doesBookHaveCorrectAuthor
    );
    validators.forImage.isCorrectNodename(
      photo,
      errors.forBook.doesBookHaveCorrectPhoto
    );
    validators.forString.isCorrectString(
      description,
      10,
      errors.forBook.doesBookHaveCorrectDescription
    );

    this.title = title;
    this.author = author;
    this.photo = photo;
    this.description = description;
    this.uuid = uuidv4();
  }
}

export default Book;
