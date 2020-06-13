import React from 'react';
import PeopleIcon from '@material-ui/icons/People';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import Employee from '../Containers/Dashboard/Employees';
import Transaction from '../Containers/Dashboard/Transactions';

export const employeeRoutes = {
  id: 'employees',
  name: 'Danh sách nhân viên',
  icon: <PeopleIcon />,
  component: <Employee />,
};

export const transactionRoutes = {
  id: 'transactions',
  name: 'Danh sách giao dịch',
  icon: <AccountBalanceIcon />,
  component: <Transaction />,
};
