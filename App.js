import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AllNavigation from "./src/navigations/index";
import { store } from "./src/redux/store";
import { Provider } from "react-redux";
import { interceptorAxios } from "./src/services/interceptors";

const Index = ({ children }) => {
  interceptorAxios();
  return <>{children}</>;
};

export default function App() {
  return (
    <Index>
      <Provider store={store}>
        <AllNavigation />
      </Provider>
    </Index>
  );
}
