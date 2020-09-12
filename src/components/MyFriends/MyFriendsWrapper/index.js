import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { COLOR } from "../../../constants";
import SubTab from "../../common/SubTab";

const MyFriendsWrapper = ({ children }) => {
  return (
    <ScrollView>
      <SubTab
        buttonFocusColor={COLOR.POST_FOOTER_TELEGA_AND_SHARE_COLOR}
        textFocusColor={"#fff"}
        buttonsContainerStyle={styles.buttonsContainerStyle}
        buttonStyle={styles.buttonStyle}
        title={"My friends"}
      />
      {children}
    </ScrollView>
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
