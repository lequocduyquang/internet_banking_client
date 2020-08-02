/* eslint-disable import/prefer-default-export */
/* eslint-disable react/prop-types */
import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import PropTypes from 'prop-types';
import DialogTitle from '@material-ui/core/DialogTitle';
import CreateForm from './CreateEmployee';

const DialogConfirm = ({ open, handleClose, handleCreate }) => {
  return (
    <div>
      <Dialog
        open={open}
        onClose={() => handleClose(false)}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Thêm nhân viên mới</DialogTitle>
        <DialogContent>
          <CreateForm onSubmit={handleCreate} handleClose={handleClose} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

DialogConfirm.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleCreate: PropTypes.func.isRequired,
};

export default DialogConfirm;
