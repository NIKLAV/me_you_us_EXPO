import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import Icon from "react-native-vector-icons/FontAwesome5";
import NameAndPhoto from "../../../Settings/General/NameAndPhoto";
import TextWrapper from "../../../common/TextWrapper";
import { width } from "../../../../constants";
import { openModalInProfile } from "../../../../redux/modal/actions";
import * as types from '../../../../redux/types'

const HeaderPost = ({ author, publish_at, id }) => {
  const dispatch = useDispatch()

  let { first_name, last_name, avatar } = author;

  const onPress = () => {
    dispatch({type: types.ADD_DATA_IN_PROFILE_MODAL, payload: id })
    openModalInProfile()
    
  }

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
          style={styles.nameAndPhoto}
        />
        <TouchableOpacity onPress={onPress}>
          <Icon name="ellipsis-h" size={22} color={"#b1b3b7"} />
        </TouchableOpacity>
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
  },
  nameAndPhoto: {
    width: width / 2,
  },
  createdAt: {
    flexDirection: "row",
    /* justifyContent: "flex-start", */
    marginLeft: width / 3.7, 
  },
});

export default HeaderPost;
