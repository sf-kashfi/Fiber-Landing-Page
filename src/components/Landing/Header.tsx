import React from 'react';
import { AppBar, Toolbar, Typography, Button, Link } from '@mui/material';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
 
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  signInButton: {
    marginRight: '10px',
    '&:hover': {
      color: 'white !important',
    },
  },
  signUpButton: {
    '&:hover': {
      color: 'white !important',
    },
  },
}));

export const Header: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" component="div" fontWeight="bold">
            Fiber
          </Typography>
          <div>
            <Button  component={Link} href="#" style={{ color: 'black' }}>
              Community
            </Button>
            <Button  component={Link} href="#" style={{ color: 'black' }}>
              Pricing
            </Button>
            <Button  component={Link} href="#" style={{ color: 'black' }}>
              Features
            </Button>
          </div>
          <div>
            <Button  variant="contained" color="primary" href="/signin" className={classes.signInButton}>
              Sign In
            </Button>
            <Button  variant="contained" color="primary" href="/signup" className={classes.signUpButton}>
              Sign Up
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

