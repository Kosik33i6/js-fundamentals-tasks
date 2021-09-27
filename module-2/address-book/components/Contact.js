import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';
import isEmailValid from '../utils';

class Contact {
  constructor(name, surname, email) {

    const isArgumentsAreString = typeof name === 'string' && typeof surname === 'string' && typeof email === 'string';
    if(!isArgumentsAreString) throw new Error('Arguments have to be a string');

    const isArgumentsHaveCorrectlyLength = name.length >= 2 && surname.length >=2;
    if(!isArgumentsHaveCorrectlyLength) throw new Error('Arguments length must be greater then zero');

    const isCorrectEmail = isEmailValid(email);
    if(!isCorrectEmail) throw new Error('Incorrect email');

    this.name = name;
    this.surname = surname;
    this.email = email;
    this.modificationDate = moment().format('MMMM Do YYYY, h:mm:ss a');
    this.createDate = moment().format('MMMM Do YYYY, h:mm:ss a');
    this.uuid = uuidv4();
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

    const contact = `${this.name} ${this.surname} ${this.email}`.toLowerCase().trim();
    const regExpForSearchingValue = new RegExp(searchingValue.toLowerCase().trim(), 'g');

    return regExpForSearchingValue.test(contact);
  }
}

export default Contact;
