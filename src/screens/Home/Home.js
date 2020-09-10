import React from "react";
import { Text, ScrollView } from "react-native";
import CustomStatusBar from "../../components/common/StatusBar";
import HeaderProfile from "../../components/MyProfile/Header";
import AddingPostField from "../../components/MyProfile/AddingPostField";
import Post from "../../components/MyProfile/Post";

const Home = () => {
  return (
    <ScrollView>
    <CustomStatusBar/>
      <HeaderProfile/>
      <AddingPostField/>
      <Post/>
      <Post/>
    </ScrollView>
  );
};

export default Home;
