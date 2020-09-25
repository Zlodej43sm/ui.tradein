import isEmail from 'validator/es/lib/isEmail';
import isEmpty from 'validator/es/lib/isEmpty';

export const validator = {
  email: (value) => isEmail(value),
  password: (value) => !isEmpty(value),
  string: (value) => !isEmpty(value),
  username: (value) => value.trim().length >= 3
};
