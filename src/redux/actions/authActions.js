import {
  USER_AUTHENTICATED,
  USER_AUTHENTICATED_REQUEST,
  USER_AUTHENTICATED_REQUEST_FAIL
} from '../constants/authConstants';
import Axios from 'axios';

export const signIn = (user) => async (dispatch) => {
  dispatch({ type: USER_AUTHENTICATED_REQUEST });
  try {
    const config = {
      headers: {
        'contnt-type': 'application/json'
      }
    };
    const res = await Axios.post(
      'https://rekindle-moments.herokuapp.com/api/users/signin',
      user,
      config
    );
    dispatch({ type: USER_AUTHENTICATED, payload: res.data });
  } catch (error) {
    dispatch({ type: USER_AUTHENTICATED_REQUEST_FAIL, payload: error });
  }
};

export const signUp = (user) => async (dispatch) => {
  dispatch({ type: USER_AUTHENTICATED_REQUEST });
  try {
    const config = {
      headers: {
        'contnt-type': 'application/json'
      }
    };
    const res = await Axios.post(
      'https://rekindle-moments.herokuapp.com/api/users/signup',
      user,
      config
    );
    console.log(res);
    dispatch({ type: USER_AUTHENTICATED, payload: res.data });
  } catch (error) {
    dispatch({ type: USER_AUTHENTICATED_REQUEST_FAIL, payload: error });
  }
};
