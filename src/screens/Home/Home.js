import React, { useEffect, useState } from "react";
import { FlatList, View, ActivityIndicator, Text } from "react-native";
import CustomStatusBar from "../../components/common/StatusBar";
import HeaderProfile from "../../components/MyProfile/Header";
import AddingPostField from "../../components/MyProfile/AddingPostField";
import Post from "../../components/MyProfile/Post";
import { useDispatch, useSelector } from "react-redux";
import { getMyFeeds } from "../../redux/feed/actions";
import { getUserData } from "../../redux/account/actions";
import BottomSheet from "../../components/MyFriends/BottomSheet";
import { closeModalInProfile } from "../../redux/modal/actions";

const HomeHeader = () => {
  return (
    <>
      <HeaderProfile />
      <AddingPostField />
    </>
  );
};

const Home = () => {
  /* const token = useSelector(state => state.auth.token) */
  const [page, setPage] = useState(1);
  /*   console.warn("page", page); */
  const loadMore = () => {
    /* setPage((prev) => prev + 1); */
    setPage(page + 1);
  };

  const dispatch = useDispatch();

  /* useEffect(() => {
    if (page > lastPage) return;
    dispatch(getMyFeeds(page));
  }, [page]);

  const data = useSelector((state) => state.feed.data);
  const loading = useSelector((state) => state.feed.loading);
  const lastPage = useSelector((state) => state.feed.lastPage);
  const isOpenInProfile = useSelector((state) => state.modal.isOpenInProfile);
  const postId = useSelector((state) => state.modal.profileData); */
  /* const avatar = useSelector((state => state.account.data.avatar.url)) */

  const footerList = () => {
    return (
      <>
        {loading && (
          <View>
            <ActivityIndicator size={"large"} />
          </View>
        )}
      </>
    );
  };

  return (
    <>
      <CustomStatusBar />

   {/*    <FlatList
        scrollEventThrottle={16}
        data={data}
        keyExtractor={(item, index) => item.id.toString() + index}
        renderItem={({ item }) => <Post data={item} />}
        onEndReachedThreshold={1}
        onEndReached={loadMore}
        ListHeaderComponent={HomeHeader}
        ListFooterComponent={footerList}
      />

      <BottomSheet
        isOpen={isOpenInProfile}
        dispatchToClose={closeModalInProfile}
      >
        {postId && <Text>{postId}</Text>}
      </BottomSheet> */}
    </>
  );
};

export default Home;
