import axios from "axios";
import AsyncStorage from "@react-native-community/async-storage";
import { logout } from "../redux/auth/actions";
import { navigation } from "./helpers";

export const interceptorAxios = ({ dispatch }) => {
  console.warn("intercept");
  /* axios.interceptors.request.use(
    config => {
      const newConfig = config;
      if (config.url === '/api/current_country') {
        delete newConfig.headers.common.Authorization;
        return newConfig;
      }
      return newConfig;
    },
    error => {
      return Promise.reject(error);
    },
  ); */

  return axios.interceptors.response.use(
    async (response) => {
      if (response.config.url === "/api/login") {
        const token = response?.data?.token;
        console.warn("token in int", token);
        await AsyncStorage.setItem("token", token);
        if (token) {
          axios.defaults.headers.common.Authorization = `Bearer ${token}`;
          /* history.replace(routes.newsfeed) */
        }
      }
      /* if (response.config.url === '/api/logout' && response.status === 204) {
        delete axios.defaults.headers.common.Authorization;
      } */

      return response;
    },
    (error) => {
      if (error.response && error.response.status === 401) {
        delete axios.defaults.headers.common.Authorization;
        dispatch(logout());
        navigation.navigate("Auth");
      }
      return Promise.reject(error);
    }
  );
};
