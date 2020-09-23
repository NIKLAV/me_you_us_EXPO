import axios from "axios";
axios.defaults.baseURL = "http://77.120.241.80:8871/api/";

export const auth = {
  login: (body) => axios.post("login", body),
  signUp: (body) => axios.post("register", body),
  logout: () => axios.post("logout"),
};

export const account = {
  getAccount: () => axios.get("account"),
  updateAccount: (body) => axios.put("account", body),
  uploadPhoto: (body) => axios.post("account/photo", body),
};

export const feeds = {
  getMyFeeds: (page) => axios.get(`feeds?per_page=8&page=${page}`),
  addNewFeed: (body) => axios.post(`feeds`, body),
  deleteFeed: (id) => axios.delete(`feeds/${id}`),
};

export const chats = {
  getChats: () => axios.get(`threads`),
  deleteChat: (id) => axios.delete(`threads/${id}`),
  getMessagesFromChat: (id) => axios.get(`threads/${id}`),
  sendMessage: (body) => axios.post(`messages`, body),
};
