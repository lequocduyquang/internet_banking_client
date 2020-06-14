/* eslint-disable react/require-default-props */
import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '../../../Components/CustomField/TextField';

const styles = {
  form: {
    display: 'flex',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  btn: {
    marginTop: 25,
  },
};

let FilterForm = ({ classes, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <div>
        <p>Từ ngày</p>
        <Field name="begin" component={TextField} type="date" />
      </div>
      <div>
        <p>Đến ngày</p>
        <Field name="end" component={TextField} type="date" />
      </div>
      <div>
        <p>Ngân hàng liên kết</p>
        <Field name="partner" component={TextField} type="text" />
      </div>
      <div className={classes.btn}>
        <Button type="submit" variant="contained" color="primary">
          Tìm kiếm
        </Button>
      </div>
    </form>
  );
};

FilterForm = reduxForm({
  form: 'filterTransaction',
})(FilterForm);

FilterForm.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  handleSubmit: PropTypes.func,
};

export default withStyles(styles)(FilterForm);
