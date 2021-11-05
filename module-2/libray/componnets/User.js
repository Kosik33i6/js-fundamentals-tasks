import { v4 as uuidv4 } from 'uuid';
import validators from '../utils';

class User {
  constructor(name, surname) {
    validators.forUser.isCorrctUserData(name, surname);

    this.name = name;
    this.surname = surname;
    this.uuid = uuidv4();
  }

}

export default User;
