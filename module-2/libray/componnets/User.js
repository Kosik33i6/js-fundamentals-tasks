import { v4 as uuidv4 } from 'uuid';

class User {
  constructor(name, surname) {
    this.uservalidator(name, surname);

    this.name = name;
    this.surname = surname;
    this.uuid = uuidv4();
  }

  uservalidator(name, surname) {
    const isArgumentsHaveCorrectType = typeof name === 'string' && typeof surname === 'string';
    if(!isArgumentsHaveCorrectType) throw new Error('Argument name and surname have to be a string');

    const isArgumentsHaveCorrectLength = name.length >= 2 && surname.length >= 2;
    if(!isArgumentsHaveCorrectLength) throw new Error('The minimum length of arguments is two');
  }

}

export default User;
