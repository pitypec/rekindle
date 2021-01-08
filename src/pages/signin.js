import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signIn } from '../redux/actions/authActions.js';
import {
  FORMCONTAINER,
  FORM,
  LABEL,
  INPUT,
  H3,
  BUTTON
} from '../styles/common';

const Signin = () => {
  const [data, setData] = useState({
    email: '',
    password: ''
  });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signIn(data));
  };
  const handleEmail = (e) => {
    setData({
      ...data,
      email: e.target.value
    });
  };
  const handlePassword = (e) => {
    setData({
      ...data,
      password: e.target.value
    });
  };

  return (
    <FORMCONTAINER>
      <FORM onSubmit={handleSubmit}>
        <LABEL for='email'>Email</LABEL>
        <INPUT
          type='text'
          value={data.email}
          onChange={handleEmail}
          name='email'
        />
        <LABEL for='email'>Password</LABEL>
        <INPUT
          type='password'
          value={data.password}
          onChange={handlePassword}
          name='password'
          id='password'
        />
        <H3>forgot password?</H3>
        <BUTTON type='submit'>Login</BUTTON>
      </FORM>
    </FORMCONTAINER>
  );
};

export default Signin;
