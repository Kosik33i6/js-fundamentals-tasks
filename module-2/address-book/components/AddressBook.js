import Group from './Group';
import withContactsHandling from './withContactsHandling';

class AddressBook extends withContactsHandling {
  constructor(contactsList, groupList) {
    const isArray = Array.isArray(contactsList) && Array.isArray(groupList);
    if(!isArray) throw new Error('Arguments contactsList and groupList have to be an array');

    super(contactsList);
    this.groupList = groupList;
  }

  addGroup(name) {
    console.log('Add group');
    const isString = typeof name === 'string';
    if(!isString) throw new Error('Argument name have to be a string');

    const isNameHaveCorrectlyLength = name.length >= 2;
    if(!isNameHaveCorrectlyLength) throw new Error('Name length should be longer than two');

    const group = new Group();
    this.groupList.push(group);
  }

  removeGroup(index) {
    this.indexValidator(index);
    this.groupList.splice(index, 1);
  }

  renameGroup(index, newName) {
    this.indexValidator(index);
    const isString = typeof newName === 'string';
    if(!isString) throw new Error('Argument name have to be a string');

    const isNameHaveCorrectlyLength = newName.length >= 2;
    if(!isNameHaveCorrectlyLength) throw new Error('newValue length should be longer than two');

    this.groupList[index].rename(newName);
  }
}

export default AddressBook;

