import { v4 as uuidv4 } from 'uuid';

class Book {
  constructor(title, author, photo, description) {
    this.bookValidator(title, author, photo, description);
    this.title = title;
    this.author =author;
    this.photo = photo;
    this.description = description;
    this.uuid = uuidv4();
  }


  bookValidator(title, author, photo, description) {
    const isBookDataAreStringType = typeof title === 'string' && typeof author === 'string' && typeof description === 'string';
    if(!isBookDataAreStringType) throw new Error('Arguments title, author and description have to be a strong type');

    const isBookDataHaveCorrectLength = title.length >= 2 && author.length >= 2 && description.length >= 10;
    if(!isBookDataHaveCorrectLength) throw new Error('Arguments title, author or description are to short');

    const isIMGElement = photo.nodeName === 'IMG';
    if(!isIMGElement) throw new Error('Photo is not a DOM img element');
  }


}

export default Book;
