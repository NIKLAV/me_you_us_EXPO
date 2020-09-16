import React, { useEffect } from "react";
import { View, StyleSheet, Image } from "react-native";
import { height, COLOR, MARGIN, width, FONT_SIZE } from "../../../constants";
import EdditProfileButton from "./EdditProfileButton";
import RoundPhoto from "../../common/RoundPhoto";
import { useDispatch, useSelector } from "react-redux";
import TextWrapper from "../../common/TextWrapper";
import { getUserData } from "../../../redux/account/actions";

const HeaderProfile = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserData());
  }, []);

  const avatarUrl = useSelector((state) => state.account.avatarUrl);
  const { first_name, last_name } = useSelector((state) => state.account.data);
  /* const loading = useSelector((state) => state.account.loading); */

  return (
    <View style={styles.container}>
      <EdditProfileButton />
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: MARGIN.DEFAULT_MARGIN_VERTICAL,
    height: height / 2.4,
    alignItems: "center",
    backgroundColor: COLOR.BACK_MAIN_TOP_TABBAR_COLOR,
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
});

export default HeaderProfile;
