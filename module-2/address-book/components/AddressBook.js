import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';

import isEmailValid from '../utils';

class AddressBook {
    constructor(contactsList = [], groupList = []) {
      if(!Array.isArray(contactsList) && !Array.isArray(groupList)) {
        throw new Error('Arguments contactsList and groupList have to be array');
      }
      this.contactsList = contactsList;
      this.groupList = groupList;
    }

    addContact(name, surname, email) {
      console.log('add new contact');

      if(name.length <= 2 && surname.length <= 2 && email.length <= 4) {
        throw new Error('Arguments are too short');
      }
      if(typeof name !== 'string' && typeof surname !== 'string') {
        throw new Error('Argumants name and surname have to be a string type');
      }
      if(!isEmailValid(email)) {
        throw new Error('Arguments email have to be a email');
      }

      const contactData= {
        name,
        surname,
        email,
        modificationDate: moment().format('MMMM Do YYYY, h:mm:ss a'),
        createDate: moment().format('MMMM Do YYYY, h:mm:ss a'),
        uuid: uuidv4(),
      };

      this.contactsList.push(contactData);
    }

    searchContact(searchingValue) {
      const filteredContact = this.contactsList.filter(contact => {
        const values = Object.values(contact);
        const valuesToLowerCase = values.map(value => value.toLowerCase());
        return valuesToLowerCase.includes(searchingValue);
      });
      return filteredContact;
    }

    removeContact(index) {
      if(Number.isNaN(index)) {
        throw new Error('Argument index have to be a number');
      }
      this.contactsList.splice(index, 1);
    }

    changeContactData(index, keyToChange, newValue) {

      if(Number.isNaN(index)) {
        throw new Error('Argument index have to be a number');
      }

      if(keyToChange !== 'name' && keyToChange !== 'surname' && keyToChange !== 'email') {
        throw new Error('Arguments keyToChange must be equal to "name" or "surname" or "email"');
      }

      if(keyToChange === 'email' && !isEmailValid(newValue)) {
        throw new Error('Arguments keyToChange have to be a email');
      }

      this.contactsList[index][keyToChange] = newValue;
      this.contactsList[index].modificationDate = moment().format('MMMM Do YYYY, h:mm:ss a');
    }

    addGroup(name) {
      console.log('Add group');
      if(typeof name !== 'string') {
        throw new Error('Arguments name have to be a string type');
      }

      const groupData = {
        contactsList: [],
        name,
        uuid: uuidv4(),
      }

      this.groupList.push(groupData);
    }

    removeGroup(index) {
      if(Number.isNaN(index)) {
        throw new Error('Argument index have to be a number');
      }
      this.groupList.splice(index, 1);
    }

    renameGroup(index, newValue) {
      if(Number.isNaN(index)) {
        throw new Error('Argument index have to be a number');
      }

      if(newValue.length < 2 && typeof newValue !== 'string') {
        throw new Error('Arguments newValue is to short');
      }

      this.groupList[index].name = newValue;
    }
  }

  export default AddressBook;

