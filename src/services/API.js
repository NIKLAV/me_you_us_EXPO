import axios from "axios";
axios.defaults.baseURL = "http://77.120.241.80:8871/api/";

export const auth = {
  login: (body) => axios.post("login", body),
  signUp: (body) => axios.post("register", body),
  logout: () => axios.post("logout")
};

export const account = {
  getAccount: () => axios.get("account"),
  updateAccount: (body) => axios.put("account", body),
  uploadPhoto: (body) => axios.post('account/photo', body)
};

