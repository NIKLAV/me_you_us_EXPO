import React from "react";
import { View, Image, StyleSheet } from "react-native";

const RoundPhoto = ({ url, size = 60 }) => {
  return (
    <View>
      <Image
        style={[styles.image, { width: size, height: size }]}
        source={{ uri: url }}
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
