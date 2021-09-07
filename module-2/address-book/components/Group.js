import AddressBook from "./AddressBook";

class Group extends AddressBook {
  constructor(contactsList = [], name, uuid) {
    if(!Array.isArray(contactsList)) {
      throw new Error('Arguments contactsList have to be array');
    }
    if(typeof name !== 'string' && typeof uuid !== 'string') {
      throw new Error('Arguments name and uuid have to be a string type');
    }
    super(contactsList);
    this.name = name;
    this.uuid = uuid;
  }

  renameGroup(newName) {
    if(newName.lenght < 2 && typeof newName !== 'string') {
        throw new Error('The newName argument must be of type string and length greater than two');
    }
    this.name = newName;
  }
}

export default Group;
