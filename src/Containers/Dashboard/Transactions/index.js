/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import { TableCell, TableRow, TableBody } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import compose from 'recompose/compose';
import Pagination from '@material-ui/lab/Pagination';
import { fetchTransaction } from '../../../Actions/Transaction';
import EmployeeList from '../../../Components/Dashboard/TableBody';
import HeadList from './HeadTable';
import TransactionItem from './TransactionItem';
import { formatter } from '../../../Helpers/ToCurrency';
import Filter from './Filter';

const styles = {
  pagination: {
    marginTop: 6,
    display: 'flex',
    justifyContent: 'center',
  },
  sum: {
    fontWeight: 'bold',
  },
};

const Transactions = ({ getTransaction, classes, transactions }) => {
  const [page, setPage] = useState(1);
  const [beginDate, setBegin] = useState(null);
  const [endDate, setEnd] = useState(null);
  const [partnerCode, setPartner] = useState(null);

  useEffect(() => {
    getTransaction(page, beginDate, endDate, partnerCode);
  }, [page]);

  const handleChangePage = (event, value) => {
    setPage(value);
  };

  const handleFilter = (values) => {
    const { begin, end, partner } = values;
    setBegin(begin);
    setEnd(end);
    setPartner(partner);
    getTransaction(page, begin, end, partner);
  };

  const { items, total, sum_amount } = transactions;

  return (
    <>
      <Filter onSubmit={handleFilter} />
      <TableContainer component={Paper}>
        <Table>
          <HeadList />
          <EmployeeList>
            {Array.isArray(items) &&
              items.map((transaction, index) => (
                <TransactionItem
                  key={transaction.id}
                  index={index + 1}
                  transaction={transaction}
                />
              ))}
          </EmployeeList>
          {total > 0 && (
            <TableBody>
              <TableRow>
                <TableCell rowSpan={3} colSpan={3} />
                <TableCell className={classes.sum} colSpan={2}>
                  Tổng tiền giao dịch
                </TableCell>
                <TableCell className={classes.sum}>
                  {sum_amount > 0 && formatter.format(sum_amount)}
                </TableCell>
              </TableRow>
            </TableBody>
          )}
        </Table>
      </TableContainer>
      <div className={classes.pagination}>
        <Pagination count={Math.ceil(total / 10)} onChange={handleChangePage} />
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    transactions: state.transactions,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTransaction: (page, begin, end, partner) => {
      dispatch(fetchTransaction(page, begin, end, partner));
    },
  };
};

Transactions.propTypes = {
  transactions: PropTypes.instanceOf(Object).isRequired,
  getTransaction: PropTypes.func.isRequired,
  classes: PropTypes.instanceOf(Object).isRequired,
};

export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps),
)(Transactions);
