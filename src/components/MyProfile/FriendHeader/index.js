import React, { useEffect } from "react";
import { View, StyleSheet, Image } from "react-native";
import TelegaIcon from "react-native-vector-icons/MaterialCommunityIcons";
import PlusIcon from "react-native-vector-icons/FontAwesome5";
import EllepsisIcon from "react-native-vector-icons/FontAwesome5";
import {
  height,
  COLOR,
  MARGIN,
  width,
  FONT_SIZE,
  containerWidth,
} from "../../../constants";
import RoundPhoto from "../../common/RoundPhoto";
import { useDispatch, useSelector } from "react-redux";
import TextWrapper from "../../common/TextWrapper";
import { getUserData } from "../../../redux/account/actions";
import CustomButton from "../../common/Button";
import IconWrapper from "../../common/IconWrapper";
import BlockWithButtons from "./BlockWithButtons";

const FriendHeaderProfile = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserData());
  }, []);

  const avatarUrl = useSelector((state) => state.account.avatarUrl);
  const { first_name, last_name } = useSelector((state) => state.account.data);
  /* const loading = useSelector((state) => state.account.loading); */

  return (
    <>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require("../../../assets/img/my_profile/header_bg.png")}
        />
        <View style={styles.avatar}>
          {avatarUrl && <RoundPhoto size={height / 5.5} url={avatarUrl} />}
          <View style={{ marginVertical: 15 }}>
            <TextWrapper style={styles.text}>
              {first_name} {last_name}
            </TextWrapper>
          </View>
        </View>
        <View style={styles.buttonsContainer}>
          <BlockWithButtons />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: MARGIN.DEFAULT_MARGIN_VERTICAL,
   /*  height: height / 2.4, */
    alignItems: "center",
    backgroundColor: COLOR.BACK_MAIN_TOP_TABBAR_COLOR,
    paddingBottom: 20,
  },
  image: {
    width: width - 16,
    height: height / 4.5,
    marginTop: 15,
    borderRadius: 15,
  },
  avatar: {
    position: "absolute",
    top: height / 8,
  },
  text: {
    textAlign: "center",
    fontSize: FONT_SIZE.H1,
  },
  buttonsContainer: {
      marginTop: height / 7
  }
});

export default FriendHeaderProfile;
