import React from "react";
import { View, Image, StyleSheet } from "react-native";

const RoundPhoto = ({ url, size = 60 }) => {
  const checkUrl = (url) => {
    if (url === null) return;
    if (url.includes("http") || url.includes("file:")) {
      return url;
    }
    return `http://77.120.241.80:8871/storage/${url}`;
  };

  return (
    <View>
      <Image
        style={[styles.image, { width: size, height: size }]}
        source={{ uri: checkUrl(url) }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    borderRadius: 100,
  },
});

export default RoundPhoto;
