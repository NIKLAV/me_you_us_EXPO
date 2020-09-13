import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { COLOR, height } from "../../../constants";
import SubTab from "../../common/SubTab";

const MyFriendsWrapper = ({ children }) => {
  return (
    <View style={{minHeight: height}}>
      <SubTab
        buttonFocusColor={COLOR.POST_FOOTER_TELEGA_AND_SHARE_COLOR}
        textFocusColor={"#fff"}
        buttonsContainerStyle={styles.buttonsContainerStyle}
        buttonStyle={styles.buttonStyle}
        title={"My friends"}
      />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  buttonsContainerStyle: {
    justifyContent: "space-between",
    width: 170,
  },
  buttonStyle: {
    borderColor: COLOR.POST_FOOTER_TELEGA_AND_SHARE_COLOR,
  },
});

export default MyFriendsWrapper;
