import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { width } from "../../constants";
import NameAndPhoto from "../Settings/General/NameAndPhoto";

const Friend = () => {
  return (
    <View style={styles.container}>
      <NameAndPhoto
        url={"https://i.ytimg.com/vi/vNRtqcpz5xY/maxresdefault.jpg"}
        name="Vasiliy"
        lastName="PupilSd"
        style={styles.nameAndPhoto}
        nameContainerStyle={styles.nameContainerStyle}
      />
      <TouchableOpacity>
        <Icon name="ellipsis-h" size={22} color={"#b1b3b7"} />
      </TouchableOpacity> 
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 12,
        paddingBottom: 12,
        paddingHorizontal: 12,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderBottomWidth: 1,
    },
  nameAndPhoto: {
    justifyContent: "flex-start",
  },
  nameContainerStyle: {
      marginLeft: 30,
  }
  
});

export default Friend;
