import React from "react";
import { View, StyleSheet } from "react-native";
import NameAndPhoto from "../../../Settings/General/NameAndPhoto";
import TextWrapper from "../../../common/TextWrapper";
import { width } from "../../../../constants";

const HeaderPost = ({ author, publish_at }) => {
  
  let { first_name, last_name, avatar } = author;

  return (
    <View style={styles.container}>
      <NameAndPhoto
        name={first_name}
        lastName={last_name}
        url={
          avatar
            ? avatar.url
            : "https://img2.freepng.ru/20180920/yko/kisspng-computer-icons-portable-network-graphics-avatar-ic-5ba3c66df14d32.3051789815374598219884.jpg"
        }
        style={styles.nameAndPhoto}
      />
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
    justifyContent: "flex-start",
    marginLeft: 80,
  },
});

export default HeaderPost;
