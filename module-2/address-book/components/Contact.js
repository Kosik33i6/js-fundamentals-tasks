import moment from 'moment';
import isEmailValid from '../utils';

class Contact {
  constructor(data) {
    Object.values(data).forEach(value => {
      if(typeof value !== 'string' && value.length < 2) {
        throw new Error('Value in object have to be a string type and cannot be shorter than two');
      }
    });
    this.data = data;
  }

  changeData(keyToChange, newValue) {
    if(keyToChange !== 'name' && keyToChange !== 'surname' && keyToChange !== 'email') {
      throw new Error('Arguments keyToChange must be equal to "name" or "surname" or "email"');
    }

    if(keyToChange === 'email' && !isEmailValid(newValue)) {
      throw new Error('Arguments keyToChange have to be a email');
    }

    this.data[keyToChange] = newValue;
    this.data.modificationDate = moment().format('MMMM Do YYYY, h:mm:ss a');
  }
}

export default Contact;
