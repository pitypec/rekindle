import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUp } from '../redux/actions/authActions.js';
import {
  FORMCONTAINER,
  FORM,
  LABEL,
  INPUT,
  H3,
  BUTTON
} from '../styles/common';

const Signup = () => {
  const [data, setData] = useState({
    email: '',
    password: '',
    confirmpassword: ''
  });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signUp(data));
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
  const handleConfirmPassword = (e) => {
    setData({
      ...data,
      confirmpassword: e.target.value
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
        <LABEL for='email'>Confirm Password</LABEL>
        <INPUT
          type='password'
          value={data.confirmpassword}
          onChange={handleConfirmPassword}
          name='confirmpassword'
          id='confirmpassword'
        />
        <H3>forgot password?</H3>
        <BUTTON type='submit'>Login</BUTTON>
      </FORM>
    </FORMCONTAINER>
  );
};

export default Signup;
