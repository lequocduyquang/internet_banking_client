import React, { useState, useEffect } from 'react';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import compose from 'recompose/compose';
import Pagination from '@material-ui/lab/Pagination';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { DialogConfirm } from './ConfirmDelete';
import { fetchEmployee, removeEmployee } from '../../../Actions/Employee';
import EmployeeList from '../../../Components/Dashboard/TableBody';
import EmployeeItem from './EmployeeItem';
import HeadList from './HeadTable';

const styles = {
  pagination: {
    marginTop: 6,
    display: 'flex',
    justifyContent: 'center',
  },
  title: {
    display: 'flex',
    fontSize: 24,
    justifyContent: 'center',
    '& svg': {
      margin: '22px 10px',
    },
  },
  notFound: {
    textAlign: 'center',
  },
};

const Employees = ({ getEmployee, classes, employees, deleteEmployee }) => {
  const [page, setPage] = useState(1);
  const [idEmployee, setidEmployee] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    getEmployee(page);
  }, [page]);

  const handleChangePage = (event, value) => {
    setPage(value);
  };

  const handleDelete = () => {
    deleteEmployee(idEmployee);
    setOpenDialog(false);
  };

  const { items, total } = employees;
  return (
    <>
      <TableContainer component={Paper}>
        <div className={classes.title}>
          <SupervisedUserCircleIcon fontSize="large" />
          <p>Danh sách nhân viên</p>
        </div>
        <Table>
          <HeadList />
          <EmployeeList>
            {Array.isArray(items) &&
              items.map((employee, index) => (
                <EmployeeItem
                  key={employee.id}
                  index={index + 1}
                  employee={employee}
                  handleOpenDialog={setOpenDialog}
                  getId={setidEmployee}
                />
              ))}
          </EmployeeList>
        </Table>
      </TableContainer>
      {(!Array.isArray(items) || items.length === 0) && (
        <div className={classes.notFound}>
          <p>Không có giao dịch nào.</p>
        </div>
      )}
      <div className={classes.pagination}>
        <Pagination count={Math.ceil(total / 10)} onChange={handleChangePage} />
      </div>
      <DialogConfirm
        handleDelete={handleDelete}
        open={openDialog}
        handleClose={setOpenDialog}
      />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    employees: state.employees,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getEmployee: (page) => {
      dispatch(fetchEmployee(page));
    },
    deleteEmployee: (id) => {
      dispatch(removeEmployee(id));
    },
  };
};

Employees.propTypes = {
  getEmployee: PropTypes.func.isRequired,
  classes: PropTypes.instanceOf(Object).isRequired,
  employees: PropTypes.instanceOf(Object).isRequired,
  deleteEmployee: PropTypes.func.isRequired,
};

export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps),
)(Employees);
