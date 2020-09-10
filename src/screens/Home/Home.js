import React, { useEffect } from "react";
import { Text, ScrollView, FlatList } from "react-native";
import CustomStatusBar from "../../components/common/StatusBar";
import HeaderProfile from "../../components/MyProfile/Header";
import AddingPostField from "../../components/MyProfile/AddingPostField";
import Post from "../../components/MyProfile/Post";
import { useDispatch, useSelector } from "react-redux";
import { getMyFeeds } from "../../redux/feed/actions";

const HomeHeader = () => {
  return (
    <>
      <HeaderProfile />
      <AddingPostField />
    </>
  );
};

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMyFeeds());
  }, [])
    

  const data = useSelector((state) => state.feed.data.data);
  console.warn('data in home', data)
  return (
    <>
      <CustomStatusBar />
      <FlatList
        data={data}
        keyExtractor={({id}) => id.toString()}
        renderItem={({item}) => <Post data={item}/>}
        ListHeaderComponent={HomeHeader}
      />
    </>
  );
};

export default Home;
