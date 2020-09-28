import React from "react";
import { ActivityIndicator, View } from "react-native";

const Preloader = () => {
  return (
    <View>
      <ActivityIndicator size='large' />
    </View>
  );
};

export default Preloader;
