import React, { useEffect, useState } from "react";
import {
  FlatList,
  View,
  ActivityIndicator,
  Text,
  StyleSheet,
} from "react-native";
import PenIcon from "react-native-vector-icons/FontAwesome5";
import DeleteIcon from "react-native-vector-icons/MaterialCommunityIcons";
import CustomStatusBar from "../../components/common/StatusBar";
import HeaderProfile from "../../components/MyProfile/Header";
import AddingPostField from "../../components/MyProfile/AddingPostField";
import Post from "../../components/MyProfile/Post";
import { useDispatch, useSelector } from "react-redux";
import { deleteMyFeed, getMyFeeds } from "../../redux/feed/actions";
import { getUserData } from "../../redux/account/actions";
import BottomSheet from "../../components/common/BottomSheet";
import { closeModalInProfile } from "../../redux/modal/actions";
import {
  COLOR,
  containerWidth,
  height,
  MODAL_HEIGHT_IN_MY_FRIENDS,
  MODAL_HEIGHT_IN_MY_PROFILE,
} from "../../constants";
import CustomButton from "../../components/common/Button";

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

  useEffect(() => {
    if (page > lastPage) return;
    dispatch(getMyFeeds(page));
  }, [page]);

  const data = useSelector((state) => state.feed.data);

  const loading = useSelector((state) => state.feed.loading);
  const lastPage = useSelector((state) => state.feed.lastPage);
  const isOpenInProfile = useSelector((state) => state.modal.isOpenInProfile);
  const postId = useSelector((state) => state.modal.profileData.id);
  const myId = useSelector((state) => state.account.id);
  console.log('myId', myId)
  const authorId = useSelector((state) => state.modal.profileData.authorId);

  const deletePost = () => {
    dispatch(deleteMyFeed(postId));
    closeModalInProfile();
  };
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

      <FlatList
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
        modalHeight={MODAL_HEIGHT_IN_MY_PROFILE}
        modalStyle={styles.modalStyle}
      >
        {myId === authorId ? (
          <View style={styles.buttonContainer}>
            <CustomButton icon text="Edit" styleButton={styles.edditButton}>
              <PenIcon size={18} color="#fff" name="pen" />
            </CustomButton>
            <CustomButton
              icon
              styleText={styles.deleteText}
              styleButton={styles.deleteButton}
              text="Delete"
              onPress={deletePost}
            >
              <DeleteIcon color="#525B69" size={18} name="delete" />
            </CustomButton>
          </View>
        ): <Text>Some intresting functions</Text>}

        {/* {postId && <Text>{postId}</Text>} */}
      </BottomSheet>
    </>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    /* marginTop: height / 15, */
  },
  edditButton: {
    width: containerWidth,
    backgroundColor: COLOR.PRIMARY_COLOR,
  },
  deleteButton: {
    marginTop: 30,
    width: containerWidth,
    backgroundColor: "transparent",
    borderColor: "#525B69",
  },
  deleteText: {
    color: "#525B69",
  },
  modalStyle: {
    height: MODAL_HEIGHT_IN_MY_PROFILE,
    justifyContent: "center",
  },
});

export default Home;
