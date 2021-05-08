import React, { useState } from 'react';
import { makeStyles, TextField, Button } from '@material-ui/core';
import firebase from 'firebase';
import { auth } from '../../firebase';
import googleLogo from '../../assets/googleLogo.png';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
    background: 'black',
    padding: '20px',
    width: '600px',
    margin: 'auto',
  },
  title: {
    color: '#f0db72',
    textAlign: 'center',
    marginTop: '7rem',
    marginBottom: '3rem',
  },
  textField: {
    margin: '10px',
    width: '500px',
    [theme.breakpoints.down('sm')]: {
      width: '300px',
    },
  },
  btn: {
    marginLeft: '20px',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: '100vh',
  },
}));

const Login = () => {
  const classes = useStyles();
  const [error, setError] = useState(false);
  const [emailHelperText, setEmailHelperText] = useState('');
  const [passwordHelperText, setPasswordHelperText] = useState('');
  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  console.log(error);
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    // onInput change all the error messages are remove.
    setError(false);
    setEmailHelperText('');
    setPasswordHelperText('');
  };

  // auth methods
  const signInWithGoogle = async () => {
    await auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  };

  const signIn = async () => {
    try {
      // check user auth.
      await auth.signInWithEmailAndPassword(values.email, values.password);
    } catch (err) {
      console.error(err.code);
    }
  };

  const signUp = async () => {
    try {
      // new user
      await auth.createUserWithEmailAndPassword(values.email, values.password);
    } catch (err) {
      console.log(err.message);
    }
  };

  // form validation
  const formValidation = () => {
    // Email validation
    let reg = /^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$/;

    if (values.email === '' || values.email === null) {
      setError(true);
      setEmailHelperText('Email must not be empty');
    } else if (reg.test(values.email) === false) {
      setError(true);
      setEmailHelperText('Please enter valid email  address');
    } else {
      setError(false);
    }

    // Password validation

    if (values.password === '' || values.password === null) {
      setError(true);
      setPasswordHelperText('Password must not be empty');
    } else if (values.password.toString().length < 8) {
      setError(true);
      setPasswordHelperText('Password Length at least 8 characters');
    } else {
      setError(false);
    }
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    // call form validator function
    formValidation();
  };

  return (
    <div className={classes.container}>
      <>
        <h1 className={classes.title}>Chatlify</h1>
        <form noValidate autoComplete='off' onSubmit={onFormSubmit}>
          <div>
            <Button
              variant='outlined'
              color='secondary'
              startIcon={
                <img src={googleLogo} alt='Google' className='google-logo' />
              }
              className={classes.textField}
              onClick={signInWithGoogle}
            >
              Sign In With Google
            </Button>
          </div>
          <div>
            <TextField
              id='outlined-flexible'
              label='Email'
              variant='outlined'
              color='secondary'
              type='email'
              name='email'
              onChange={onChange}
              error={emailHelperText ? 1 : 0}
              helperText={emailHelperText}
              size='small'
              className={classes.textField}
            />
          </div>
          <div>
            <TextField
              id='outlined-flexible'
              label='Password'
              variant='outlined'
              color='secondary'
              type='password'
              name='password'
              onChange={onChange}
              error={passwordHelperText ? 1 : 0}
              helperText={passwordHelperText}
              size='small'
              className={classes.textField}
            />
          </div>
          <div>
            <div
              className={classes.textField}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Button
                variant='outlined'
                color='secondary'
                type='submit'
                onClick={signIn}
                style={{ width: '250px' }}
              >
                Log In
              </Button>
              <Button
                variant='outlined'
                color='secondary'
                type='submit'
                onClick={signUp}
                className={classes.btn}
                style={{ width: '250px' }}
              >
                Sign Up
              </Button>
            </div>
          </div>
        </form>
      </>
    </div>
  );
};

export default Login;
