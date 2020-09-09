import React from "react";
import { Text } from "react-native";
import CustomStatusBar from "../../components/common/StatusBar";
import HeaderProfile from "../../components/MyProfile/Header";
import AddingPostField from "../../components/MyProfile/AddingPostField";

const Home = () => {
  return (
    <>
    <CustomStatusBar/>
      <HeaderProfile/>
      <AddingPostField/>
    </>
  );
};

export default Home;
