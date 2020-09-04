import React from "react";
import { View, Text, StyleSheet } from "react-native";
import RoundPhoto from "../../common/RoundPhoto";
import TextWrapper from "../../common/TextWrapper";

const NameAndPhoto = ({ url, name, lastName }) => {
  return (
    <View style={styles.container}>
      <RoundPhoto url={url} />
      <View>
        <TextWrapper>
          {name} {lastName}
        </TextWrapper>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "60%",
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  },
});

export default NameAndPhoto;
