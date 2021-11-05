import Book from './Book';

class WithBooksHandling {
  constructor(bookList) {
    this.arrayValidator(bookList);
    this.bookList = bookList;
  }

  addBookToBookList(book) {
    this.classObjectValidator(book, Book);
    this.bookList.push(book);
  }

  removeBookFromBookList(book) {
    this.classObjectValidator(book, Book);
    const bookIndex = this.bookList.indexOf(book);
    const deleteCount = 1;
    const [removedBook] = this.bookList.splice(bookIndex, deleteCount);
    return removedBook;
  }

  classObjectValidator(classInstance, classObject) {
    const isClassInstance = classInstance instanceof classObject;
    if(!isClassInstance) throw new Error('Argument have to ba a instance of class');
  }

  arrayLengthValidator(array) {
    const isCorerectLength = array.length > 0;
    if(!isCorerectLength) throw new Error('Array is empty');
  }

  arrayValidator(array) {
    const isArray = Array.isArray(array);
    if(!isArray) throw new Error('Argument have to be an array');
  }

  arrayValidatorForInctanceOfTheClass(array, classObject) {
    const isArrayElementsAreInstance = array.every(element => element instanceof classObject);
    if(!isArrayElementsAreInstance) throw new Error('Array elements have to be a instance of class');
  }

}

export default WithBooksHandling;
