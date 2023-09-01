import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Landing } from './components/Landing';
import { SignIn, Signup } from './components/Auth';
import { Profile } from './components/Profile';
import { ThemeProvider } from '@emotion/react';
import theme from './theme/theme';



function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/" element={<Landing />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
