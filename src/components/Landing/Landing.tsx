import React from 'react';
import { Button } from '@mui/material';
import { Header } from './Header';
import { useTheme } from "@mui/material/styles";
import FirstBox from './FirstBox';

export const Landing: React.FC = () => {
  const theme = useTheme();
  return (
    <div style={{ backgroundColor: theme.palette.primary.light }}>
      <Header />
      <FirstBox />
      <h1>Welcomesssssss to the Landing Page!</h1>
      <Button variant="contained" color="primary">
        Sign In
      </Button>
      <Button variant="contained" color="secondary">
        Sign Up
      </Button>
    </div>
  );
};

export {}; 