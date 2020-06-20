import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { PrivateRoute } from '../../Components/PrivateRoute';
import NavBar from '../../Components/Dashboard/NavBar';
import Sidebar from '../../Components/Dashboard/SideBar';
import Resource from '../Resource';
import './styles.scss';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 10,
    padding: theme.spacing(3),
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
}));

const Dashboard = (props) => {
  const { match } = props;
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    window.location.href = '/login';
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar
        logout={handleLogout}
        handleDrawerOpen={handleDrawerOpen}
        open={open}
      />
      <Sidebar
        handleDrawerClose={handleDrawerClose}
        open={open}
        match={match}
      />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <PrivateRoute path={`${match.path}/:sidebarID`} component={Resource} />
      </main>
    </div>
  );
};

Dashboard.propTypes = {
  match: PropTypes.instanceOf(Object).isRequired,
};

export default connect(null, null)(Dashboard);
