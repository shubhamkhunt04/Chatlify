import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { useAuthState } from 'react-firebase-hooks/auth';

import { auth } from './firebase';
import Login from './components/Auth/Login';
import ChatRoom from './components/ChatRoom/ChatRoom'
import { darkTheme } from './theme';

import './App.css';

const App = () => {
  const [theme] = useState(darkTheme);
  const [user, loading] = useAuthState(auth);

  if (loading) return <h1>Loading</h1>;

  return (
    <>
      <ThemeProvider theme={theme}>
        {user ? (
          <ChatRoom />
        ) : (
          <Login />
        )}
      </ThemeProvider>
    </>
  );
};

export default App;
