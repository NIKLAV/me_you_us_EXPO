import React from "react";
import { View, Image, StyleSheet } from "react-native";

const RoundPhoto = ({ url, size = 60 }) => {
  const checkUrl = () => {
    if (url && url.includes("file:")) {
      return false;
    }
    return true;
  };

  return (
    <View>
      <Image
        style={[styles.image, { width: size, height: size }]}
        source={checkUrl() ? { uri: `http://77.120.241.80:8871/storage/${url}` } : {uri: url}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    borderRadius: 40,
  },
});

export default RoundPhoto;
