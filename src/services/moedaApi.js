// função de requisição da API criada com base na aula ao vivo 15.4
import { setCurrencies } from '../actions';

export const BASE_CURRENCIE_URL = 'https://economia.awesomeapi.com.br/json/all';

export const getDataCurrencie = () => async (dispatch) => {
  const response = await fetch(BASE_CURRENCIE_URL);
  const data = await response.json();
  delete data.USDT;
  delete data.DOGE;
  const currencies = Object.keys(data);

  dispatch(setCurrencies(currencies));
};
