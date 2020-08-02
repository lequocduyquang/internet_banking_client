/* eslint-disable react/require-default-props */
/* eslint-disable import/no-mutable-exports */
import React from 'react';
import { reduxForm, Field } from 'redux-form';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '../../../../Components/CustomField/TextField';

let CreateEmployee = ({ handleSubmit, handleClose }) => {
  return (
    <div>
      <Container component="main" maxWidth="xs">
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Field
                name="username"
                component={TextField}
                label="Nhập Username"
                variant="outlined"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                name="email"
                component={TextField}
                label="Nhập Email"
                variant="outlined"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                name="password"
                component={TextField}
                fullWidth
                label="Nhập mật khẩu"
                variant="outlined"
                required
                type="password"
              />
            </Grid>
          </Grid>
          <div style={{ textAlign: 'center', margin: 10 }}>
            <Button
              style={{ marginRight: 10 }}
              onClick={() => handleClose(false)}
              variant="contained"
              color="primary"
            >
              Trở lại
            </Button>
            <Button type="submit" variant="contained" color="primary">
              Thêm
            </Button>
          </div>
        </form>
      </Container>
    </div>
  );
};
CreateEmployee = reduxForm({
  form: 'createEmployee',
})(CreateEmployee);

CreateEmployee.propTypes = {
  handleSubmit: PropTypes.func,
  handleClose: PropTypes.func,
};

export default CreateEmployee;
