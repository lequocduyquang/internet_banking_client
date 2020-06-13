import { urlApi } from '../Config';
import callApi from '../Utils/apiCaller';
import authHeader from '../Helpers/AuthHeader';

export const getTransaction = (page, begin, end, parner) =>
  callApi(
    urlApi,
    `admin/transactions?begin=${begin}&&end=${end}&&parner=${parner}&&page=${page}&&per_page=10`,
    'GET',
    authHeader(),
    null,
  );
