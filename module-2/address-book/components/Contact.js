import moment from 'moment';
import isEmailValid from '../utils';

class Contact {
  constructor(name, surname, email, modificationDate, createDate, uuid) {
    const contactDataArray = [name, surname, email, modificationDate, createDate, uuid];
    contactDataArray.forEach(data => {
      const isArgumentsAreString = typeof data === 'string';
      if(!isArgumentsAreString) throw new Error('Arguments have to be a string');

      const isArgumentsHaveCorrectlyLength = data.length > 0;
      if(!isArgumentsHaveCorrectlyLength) throw new Error('Arguments length must be greater then zero');
    });

    this.name = name;
    this.surname = surname;
    this.email = email;
    this.modificationDate = modificationDate;
    this.createDate = createDate;
    this.uuid = uuid;
  }

  update(key, newValue) {

    const isCorrectKey = key === 'name' && key === 'surname' && key === 'email';
    if(isCorrectKey) throw new Error('Arguments key must be equal to "name" or "surname" or "email"');

    const isCorrectEmail = key === 'email' && !isEmailValid(newValue);
    if(isCorrectEmail) throw new Error('Arguments key have to be a email');


    this[key] = newValue;
    this.modificationDate = moment().format('MMMM Do YYYY, h:mm:ss a');
  }

  includesPhrase(searchingValue) {
    const isString = typeof searchingValue === 'string';
    if(!isString) throw new Error('Argument searchingValue have to be a string');

    const contact = `${this.name} ${this.surname}`.toLowerCase().trim();
    const regExpForSearchingValue = new RegExp(searchingValue.toLowerCase().trim(), 'g');

    return regExpForSearchingValue.test(contact);
  }
}

export default Contact;
