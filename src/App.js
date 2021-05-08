import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { useAuthState } from 'react-firebase-hooks/auth';

import { auth } from './firebase';
import Login from './components/Auth/Login';
import ChatRoom from './components/ChatRoom/ChatRoom';
import Loader from './components/Loader/Loader';
import { darkTheme, lightTheme } from './theme';

import './App.css';

const App = () => {
  const [user, loading] = useAuthState(auth);

  if (loading) return <Loader />;

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <div className='App'>{user ? <ChatRoom /> : <Login />}</div>
      </ThemeProvider>
    </>
  );
};

export default App;
