import React from 'react';
import { TableCell, TableRow, Button } from '@material-ui/core';
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
const CategoryItem = ({ employee, index, handleOpenDialog, getId }) => {
  return (
    <>
      <TableRow>
        <TableCell>{index}</TableCell>
        <TableCell>{employee.username}</TableCell>
        <TableCell>{employee.email}</TableCell>
        <TableCell>
          <Button
            onClick={() => {
              handleOpenDialog(true);
              getId(employee.id);
            }}
            size="small"
            variant="contained"
            color="secondary"
          >
            Xóa
          </Button>
        </TableCell>
      </TableRow>
    </>
  );
};

CategoryItem.propTypes = {
  employee: PropTypes.instanceOf(Object).isRequired,
  index: PropTypes.number.isRequired,
  handleOpenDialog: PropTypes.func.isRequired,
  getId: PropTypes.func.isRequired,
};

export default withStyles(styles)(CategoryItem);
