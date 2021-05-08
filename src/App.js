import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { useAuthState } from 'react-firebase-hooks/auth';

import { auth } from './firebase';
import Login from './components/Auth/Login';
import ChatRoom from './components/ChatRoom/ChatRoom';
import Loader from './components/Loader/Loader';
import { darkTheme, lightTheme } from './theme';

import './App.css';

const App = () => {
  // const [theme] = useState(darkTheme);
  const [user, loading] = useAuthState(auth);

  const [theme, setTheme] = useState(darkTheme);
  const [themeToggler, setThemeToggler] = useState(true);

  const themeHandler = () => {
    if (themeToggler) {
      setThemeToggler(false);
      setTheme(lightTheme);
    } else {
      setThemeToggler(true);
      setTheme(darkTheme);
    }
  };

  if (loading) return <Loader />;

  return (
    <>
      <ThemeProvider theme={theme}>
        <div className='App'>
          {user ? (
            <ChatRoom themeHandler={themeHandler} themeToggler={themeToggler} />
          ) : (
            <Login />
          )}
        </div>
      </ThemeProvider>
    </>
  );
};

export default App;
