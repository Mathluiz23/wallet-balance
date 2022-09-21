// Esse reducer será responsável por tratar as informações da pessoa usuária
import { SET_LOGIN_VALUE } from '../actions';

const INITIAL_STATE = {
  user: {
    email: '',
    // password: '',
  },
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_LOGIN_VALUE:
      localStorage.setItem('login', JSON.stringify(action.payload.email));
      return {
        ...state,
        email: action.payload.email,
      };
    default:
      return JSON.parse(localStorage.getItem('login'));
  }
}
export default user;
