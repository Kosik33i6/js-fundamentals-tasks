import { v4 as uuidv4 } from 'uuid';
import withContactsHandling from './withContactsHandling';

class Group extends withContactsHandling {
  constructor(contactsList = [], name) {
    const isArray = Array.isArray(contactsList);
    if(!isArray) throw new Error('Arguments contactsList have to be array');

    const isString = typeof name === 'string';
    if(!isString) throw new Error('Arguments name have to be a string type');

    super(contactsList);
    this.name = name;
    this.uuid = uuidv4();
  }

  rename(newName) {
    const isString = typeof newName === 'string';
    if(!isString) throw new Error('Argument name have to be a string');

    const isNameHaveCorrectlyLength = newName.length >= 2;
    if(!isNameHaveCorrectlyLength) throw new Error('newValue length should be longer than two');

    this.name = newName;
  }
}

export default Group;
