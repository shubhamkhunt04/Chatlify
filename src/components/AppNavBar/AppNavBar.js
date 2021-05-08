import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Button, IconButton } from '@material-ui/core';

import { auth } from '../../firebase';
import appLogo from '../../assets/appLogo.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'flex',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
}));

const AppNavBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position='fixed'>
        <Toolbar>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
          >
            <img width='40px' height='40px' src={appLogo} alt='Chatlify' />
          </IconButton>
          <Typography
            className={classes.title}
            variant='h6'
            style={{
              display: 'flex',
              justifyContent: 'flex-start',
            }}
          >
            Chatlify
          </Typography>

          <Button
            variant='contained'
            color='secondary'
            onClick={() => auth.signOut()}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default AppNavBar;
