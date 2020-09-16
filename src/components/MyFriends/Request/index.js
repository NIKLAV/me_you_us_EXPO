import React from "react";
import { View, StyleSheet } from "react-native";
import { COLOR, height, width } from "../../../constants";
import RoundPhoto from "../../common/RoundPhoto";
import CustomButton from "../../common/Button";
import TextWrapper from "../../common/TextWrapper";
const Request = () => {
  return (
    <View style={styles.container}>
      <RoundPhoto
        url={
          "https://i.pinimg.com/736x/f8/49/d3/f849d31318efe76d50bb2f06afa72e9e.jpg"
        }
        size={70}
      />

      <View style={{ flexDirection: "column", justifyContent: 'space-between', height: 64}}>
        <View /* style={styles.nameContainer} */>
          <TextWrapper>Some Name</TextWrapper>
        </View>

        <View style={styles.buttonsContainer}>
          <View>
            <CustomButton
              styleText={styles.buttonTextStyle}
              styleButton={styles.buttonAddStyle}
              text="Add"
            />
          </View>

          <CustomButton
            styleText={styles.buttonTextStyle}
            text="Reject"
            styleButton={styles.buttonStyle}
          />
          <CustomButton
            styleText={styles.buttonTextStyle}
            text="Delete"
            styleButton={styles.buttonStyle}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 12,
    paddingBottom: 12,
    paddingHorizontal: 12,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: COLOR.MYFRIENDS_SEPARATOR_COLOR,
  },
  buttonsContainer: {
    width: width / 1.5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  nameContainer: {
    position: "absolute",
    top: 8,
    left: width / 3.8,
  },
  buttonAddStyle: {
    width: width / 5,
    height: 35,
    backgroundColor: "#69ab5b",
  },
  buttonStyle: {
    width: width / 5,
    height: 35,
    backgroundColor: "#bcbec3",
  },
  buttonTextStyle: {
    fontSize: 14,
  },
});

export default Request;
