// Coloque aqui suas actions
export const SET_LOGIN_VALUE = 'SET_LOGIN_VALUE';
export const SET_PASSWORD_VALUE = 'SET_PASSWORD_VALUE';

// payload é o que recebo na  action que vai alterar no reducer e na store
export const setLoginValue = (payload) => (
  {
    type: SET_LOGIN_VALUE, payload,
  });

export const setPasswordValue = (payload) => (
  {
    type: SET_PASSWORD_VALUE, payload,
  });
