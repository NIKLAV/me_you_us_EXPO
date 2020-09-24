import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import NameAndPhoto from "../../../Settings/General/NameAndPhoto";
import TextWrapper from "../../../common/TextWrapper";
import { width } from "../../../../constants";
import { openModalInProfile } from "../../../../redux/modal/actions";
import * as types from "../../../../redux/types";
import { OpenModalButton } from "../../../common/Icons";

const HeaderPost = ({ author, publish_at, id }) => {
  const dispatch = useDispatch();

  let { first_name, last_name, avatar } = author;

  const openModal = () => {
    dispatch({
      type: types.ADD_DATA_IN_PROFILE_MODAL,
      payload: { id, authorId: author.id },
    });
    openModalInProfile();
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <NameAndPhoto
          name={first_name}
          lastName={last_name}
          url={avatar.url}
          nameContainerStyle={styles.nameContainerStyle}
        />
        <OpenModalButton onPress={openModal} />
      </View>
      <View style={styles.createdAt}>
        <TextWrapper style={{ textAlign: "center" }}>{publish_at}</TextWrapper>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    alignSelf: "center",
    width: width - 20,
    justifyContent: "space-between",
  },
  nameContainerStyle: {
    marginLeft: width / 25,
  },
  createdAt: {
    flexDirection: "row",
    /* justifyContent: "flex-start", */
    marginLeft: width / 5,
  },
});

export default HeaderPost;
