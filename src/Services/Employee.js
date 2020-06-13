import { urlApi } from '../Config';
import callApi from '../Utils/apiCaller';
import authHeader from '../Helpers/AuthHeader';

export const getEmployees = (page) =>
  callApi(
    urlApi,
    `admin/employees?page=${page}&per_page=10`,
    'GET',
    authHeader(),
    null,
  );

export const deleteEmployee = (id) =>
  callApi(urlApi, `admin/employees/${id}`, 'DELETE', authHeader(), null);
