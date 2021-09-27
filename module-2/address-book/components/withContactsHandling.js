import isEmailValid from '../utils';
import Contact from './Contact';

class withContactsHandling {
  constructor(contactsList) {
    const isArray = Array.isArray(contactsList);
    if(!isArray) throw new Error('Arguments contactsList have to be an array');

    this.contactsList = contactsList;
  }

  addContact(name, surname, email) {
    const isArgumentsHaveCorrectlylength = name.length >= 2 && surname.length >= 2 && email.length >= 4;
    if(!isArgumentsHaveCorrectlylength) throw new Error('Arguments are too short');

    const isArgumentHaveCorrectlyType = typeof name === 'string' && typeof surname === 'string' && typeof email === 'string';
    if(!isArgumentHaveCorrectlyType) throw new Error('Argumants name and surname have to be a string type');

    const isArgumentEmailValid = isEmailValid(email);
    if(!isArgumentEmailValid) throw new Error('Argument email is not a email');

    const contact = new Contact(name, surname, email);
    this.contactsList.push(contact);
  }

  removeContact(index) {
    this.indexValidator(index);
    this.contactsList.splice(index, 1);
  }

  searchContact(searchingValue) {
    const isString = typeof searchingValue === 'string';
    if(!isString) throw new Error('Argument searchingValue have to be a string');

    const filteredContact = this.contactsList.filter(contact => {
      return contact.includesPhrase(searchingValue);
    });
    return filteredContact;
  }

  updateContact(index, key, newValue) {

    this.indexValidator(index);

    const isCorrectKey = key === 'name' && key === 'surname' && key === 'email';
    if(isCorrectKey) throw new Error('Arguments key must be equal to "name" or "surname" or "email"');

    const isCorrectEmail = key === 'email' && !isEmailValid(newValue);
    if(isCorrectEmail) throw new Error('Arguments key have to be a email');

    this.contactsList[index].update(key, newValue);
  }

  indexValidator(index) {
    const isIndexInteger = Number.isInteger(index);
    if(!isIndexInteger) throw new Error('Argument index have to be a integer');

    const isIndexNaN = Number.isNaN(index);
    if(isIndexNaN) throw new Error('Argument index cannot be a NaN');

    const IsIndexHaveCorrectlyValue = index >= 0 && index < this.contactsList.length;
    if(!IsIndexHaveCorrectlyValue) throw new Error('Argument index is too low or too high');
  }
}

export default withContactsHandling;
