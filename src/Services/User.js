import { urlApi } from '../Config';
import callApi from '../Utils/apiCaller';
import authHeader from '../Helpers/AuthHeader';

export const login = (email, password) =>
  callApi(urlApi, `auth/admin/login`, 'POST', null, { email, password });

export const registerEmployee = (username, email, password) =>
  callApi(urlApi, `admin/employees`, 'POST', authHeader(), {
    username,
    email,
    password,
  });
