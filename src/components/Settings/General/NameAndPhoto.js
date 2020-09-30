import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { navigation } from "../../../services/helpers";
import RoundPhoto from "../../common/RoundPhoto";
import TextWrapper from "../../common/TextWrapper";

const NameAndPhoto = ({
  url,
  name,
  lastName,
  size,
  style,
  nameContainerStyle,
}) => {
  
  const goToProfile = () => {
    navigation.navigate('Profile')
  }
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={{ ...styles.container, ...style }}
      onPress={goToProfile}
    >
      <RoundPhoto size={size} url={url} />
      <View style={nameContainerStyle}>
        <TextWrapper>
          {name} {lastName}
        </TextWrapper>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    /* width: "100%", */
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
});

export default NameAndPhoto;
