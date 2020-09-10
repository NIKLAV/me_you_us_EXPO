import React from "react";
import AllNavigation from "./src/navigations/index";
import { store } from "./src/redux/store";
import { Provider, useDispatch } from "react-redux";
import { interceptorAxios } from "./src/services/interceptors";

const Index = ({ children }) => {
  const dispatch = useDispatch();
  interceptorAxios(dispatch);
  return <>{children}</>;
};

export default function App() {
  return (
    <Provider store={store}>
      <Index>
        <AllNavigation />
      </Index>
    </Provider>
  );
}
