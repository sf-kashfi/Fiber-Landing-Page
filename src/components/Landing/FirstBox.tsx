import React from 'react';
import { makeStyles  } from '@mui/styles';
import { Grid, Typography, Button } from '@mui/material';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  illustration: {
    maxWidth: '100%',
    height: 'auto',
  },
}));


const FirstBox: React.FC = ({
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={6}>
          <Typography variant="h4" component="h2">
           some
          </Typography>
          <Typography variant="subtitle1">sub</Typography>
          <Button variant="contained" color="primary">
            bbbbbbb
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <img
            src='hero-Illustration.png'
            alt="Illustration"
            className={classes.illustration}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default FirstBox;