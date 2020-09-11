import * as types from "../types";
import * as API from "../../services/API";
import AsyncStorage from "@react-native-community/async-storage";
import axios from "axios";

const saveDataToStorage = (token, time) => {
  AsyncStorage.setItem(
    "userData",
    JSON.stringify({
      token,
      time,
    })
  );
};

export const logout = () => async (dispatch) => {
  dispatch({ type: types.AUTH_LOGOUT_STARTED });
  try {
    const { status } = await API.auth.logout();
    console.warn("logout");
    if (status < 200 && status >= 300) throw new Error("Something went wrong");
    await AsyncStorage.removeItem("userData");
    dispatch({ type: types.AUTH_LOGOUT_SUCCESS });
    delete axios.defaults.headers.common.Authorization;
  } catch (error) {
    if (error?.response?.status === 401) return;
    /* let message = error?.response?.data; */
    console.warn("error", error);
  }
};

export const authLogin = (user, navigation) => async (dispatch) => {
  dispatch({ type: types.AUTH_LOGIN_STARTED });
  try {
    const { data, status } = await API.auth.login(user);
    console.warn("login data", data);
    if (status < 200 && status >= 300) throw new Error("Something went wrong");
    dispatch(authenticate(data.token));
    const expirationTime = new Date(new Date().getTime() + 3600000);
    saveDataToStorage(data.token, expirationTime);
    /* dispatch({ type: types.AUTH_LOGIN_SUCCESS, payload: data }); */
    navigation.navigate("MainTopTabs");
  } catch (error) {
    if (error?.response?.status === 401) return;
    let message = error?.response?.data;
    console.log("error", error.response.data);
    dispatch({ type: types.AUTH_LOGIN_FAILURE, payload: message });
  }
};

export const authSignUp = (body) => async (dispatch) => {
  dispatch({type: types.AUTH_SIGNUP_START})
  try {
    const { data, status } = await API.auth.signUp(body);
    console.log("data", data);
    if (status < 200 && status >= 300) throw new Error("Something went wrong");
    dispatch({ type: types.AUTH_SIGNUP_SUCCESS, payload: data });
  } catch (error) {
    if (error?.response?.status === 401) return;
    /* console.log(error.response.data); */
    let emailMessage = error?.response?.data?.email.toString();
    dispatch({ type: types.AUTH_SIGNUP_FAILURE, payload: emailMessage });
  }
};

export const authenticate = (token) => (dispatch) => {
  dispatch({ type: types.AUTH_AUTHENTICATE, payload: token });
};
