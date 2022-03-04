import { v4 as uuidv4 } from 'uuid';
import { errors } from '../settings';
import validators from '../validators';

class User {
  constructor(name, surname) {
    validators.forString.isCorrectString(
      name,
      2,
      errors.forUser.doesUserHaveCorrectName
    );
    validators.forString.isCorrectString(
      name,
      2,
      errors.forUser.doesUserHaveCorrectSurname
    );

    this.name = name;
    this.surname = surname;
    this.uuid = uuidv4();
    this.penalty = 0;
  }

  setPenalty(newPenalty) {
    validators.forNumbers.isPositiveInteger(newPenalty);
    this.penalty = newPenalty;
  }

  payPenalty(penalty) {
    validators.forNumbers.isPositiveInteger(penalty);
    this.penalty -= penalty;
  }
}

export default User;
