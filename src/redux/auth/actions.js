import * as types from '../types';
import * as API from '../../services/API';
import AsyncStorage from '@react-native-community/async-storage';

export const authLogin = (user, navigation) => async (dispatch) => {
  dispatch({type: types.AUTH_LOGIN_STARTED});
  try {
    const {data, status} = await API.auth.login(user);
    console.log(data);
    if (status < 200 && status >= 300) throw new Error('Something went wrong');
    await AsyncStorage.setItem('token', data.token);
    dispatch({type: types.AUTH_LOGIN_SUCCESS, payload: data});
    navigation.navigate('Newsfeed');
  } catch (error) {
    let message = error?.response?.data;
    console.log('error', error.response.data);
    dispatch({type: types.AUTH_LOGIN_FAILURE, payload: message});
  }
};

export const authSignUp = (body) => async (dispatch) => {
  try {
    const {data, status} = await API.auth.signUp(body);
    console.log('data', data);
    if (status < 200 && status >= 300) throw new Error('Something went wrong');
    dispatch({type: types.AUTH_SIGNUP_SUCCESS, payload: data});
  } catch (error) {
    console.log(error.response.data);
    let message = error?.response?.data;
    dispatch({type: types.AUTH_SIGNUP_FAILURE, payload: message});
  }
};
