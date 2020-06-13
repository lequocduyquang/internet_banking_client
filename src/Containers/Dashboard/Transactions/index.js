import React, { useState, useEffect } from 'react';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
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

const styles = {
  pagination: {
    marginTop: 6,
    display: 'flex',
    justifyContent: 'center',
  },
};

const Transactions = ({ getTransaction, classes, transactions }) => {
  const [page, setPage] = useState(1);

  useEffect(() => {
    getTransaction(page);
  }, [page]);

  const handleChangePage = (event, value) => {
    setPage(value);
  };

  const { items, total } = transactions;

  return (
    <>
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
