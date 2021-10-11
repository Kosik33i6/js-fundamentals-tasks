import Book from './Book';

class WithBooksHandling {
  constructor(bookList) {
    this.arrayValidator(bookList);
    this.bookList = bookList;
  }

  addBookToBorrowedBookList(book) {
    this.classObjectValidator(book, Book);
    this.bookList.push(book);
  }

  removeBookFromBookList(book) {
    this.classObjectValidator(book, Book);
    const bookIndex = this.bookList.indexOf(book);
    const deleteCount = 1;
    const removedBook = this.bookList.splice(bookIndex, deleteCount);
    return removedBook;
  }

  classObjectValidator(classInstance, classObject) {
    const isClassInstance = classInstance instanceof classObject;
    if(!isClassInstance) throw new Error('Argument have to ba a instance of class');
  }

  arrayValidator(array) {
    const isArray = Array.isArray(array);
    if(!isArray) throw new Error('Argument have to be an array');
  }
}

export default WithBooksHandling;
