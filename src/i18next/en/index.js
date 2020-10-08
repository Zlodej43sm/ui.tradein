import { default as common } from './common.json';
import { default as auth } from './auth.json';
import { default as recover_password } from './recover_password.json';
import { default as confirm_password } from './confirm_password.json';
import { default as side_bar } from './side_bar.json';
import { default as table_wrapper } from './table_wrapper.json';
import { default as errors } from './errors.json';

export default {
  translation: {
    ...common,
    ...auth,
    ...recover_password,
    ...confirm_password,
    ...side_bar,
    ...table_wrapper,
    ...errors
  }
};
