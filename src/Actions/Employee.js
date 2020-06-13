/* eslint-disable no-use-before-define */
/* eslint-disable no-useless-catch */
import { trackPromise } from 'react-promise-tracker';
import { EMPLOYEE } from '../Constants';
import { getEmployees, deleteEmployee } from '../Services/Employee';

export const fetchEmployee = (page) => {
  return async (dispatch) => {
    try {
      const employees = await trackPromise(getEmployees(page));
      if (employees.status === 200) {
        dispatch(fetchEmployeeSuccess(employees.data));
      }
    } catch (error) {
      throw error;
    }
  };
  function fetchEmployeeSuccess(data) {
    return {
      type: EMPLOYEE.GET_EMPLOYEE,
      payload: data,
    };
  }
};

export const removeEmployee = (id) => {
  return async (dispatch) => {
    try {
      const employee = await trackPromise(deleteEmployee(id));
      if (employee.status === 200) {
        dispatch(removeEmployeeSuccess(id));
      }
    } catch (error) {
      throw error;
    }
  };
  function removeEmployeeSuccess(_id) {
    return {
      type: EMPLOYEE.DELETE_EMPLOYEE,
      id: _id,
    };
  }
};
