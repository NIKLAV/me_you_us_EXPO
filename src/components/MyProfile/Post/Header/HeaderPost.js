import React from "react";
import { View, StyleSheet } from "react-native";
import NameAndPhoto from "../../../Settings/General/NameAndPhoto";
import TextWrapper from "../../../common/TextWrapper";
import { width } from "../../../../constants";

const HeaderPost = ({author}) => {
  console.warn('author', author)
  const {first_name, last_name, avatar} = author;
  return (
    
    <View style={styles.container}>
      <NameAndPhoto
        name={first_name}
        lastName={last_name}
        url={
          avatar.url
        }
        style={styles.nameAndPhoto}
      />
      <View style={styles.createdAt}>
        <TextWrapper style={{ textAlign: "center" }}>created_at</TextWrapper>
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
    justifyContent: "flex-start",
    marginLeft: 80,
  },
});

export default HeaderPost;
