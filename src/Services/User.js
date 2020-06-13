import { urlApi } from '../Config';
import callApi from '../Utils/apiCaller';

export const login = (email, password) =>
  callApi(urlApi, `auth/admin/login`, 'POST', null, { email, password });
