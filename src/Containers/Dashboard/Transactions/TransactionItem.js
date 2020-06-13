/* eslint-disable camelcase */
import React from 'react';
import { TableCell, TableRow, Chip } from '@material-ui/core';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  tagCategory: {
    '& div': {
      marginRight: 4,
    },
  },
  isAccept: {
    '& div': {
      marginRight: 4,
    },
    '& button': {
      borderRadius: 15,
    },
  },
};
const TransactionItem = ({ transaction, index }) => {
  const {
    updated_at,
    sender_account_number,
    receiver_account_number,
    transaction_type,
    amount,
    message,
  } = transaction;

  const getTransactionType = (transactionType) => {
    switch (transactionType) {
      case 1:
        return <Chip label="Nội bộ" />;
      case 2:
        return <Chip color="primary" label="Liên ngân hàng" />;
      case 3:
        return <Chip color="secondary" label="Ghi nợ" />;
      default:
        return <Chip variant="outlined" label="None" />;
    }
  };
  return (
    <>
      <TableRow>
        <TableCell>{index}</TableCell>
        <TableCell>{updated_at}</TableCell>
        <TableCell>{sender_account_number}</TableCell>
        <TableCell>{receiver_account_number}</TableCell>
        <TableCell>{getTransactionType(transaction_type)}</TableCell>
        <TableCell>{amount > 0 && `${amount} VNĐ`}</TableCell>
        <TableCell>{message}</TableCell>
      </TableRow>
    </>
  );
};

TransactionItem.propTypes = {
  index: PropTypes.number.isRequired,
  transaction: PropTypes.instanceOf(Object).isRequired,
};

export default withStyles(styles)(TransactionItem);
