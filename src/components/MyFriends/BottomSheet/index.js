import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Animated,
  TouchableOpacity,
  TouchableWithoutFeedback,
  PanResponder,
} from "react-native";

import { height } from "../../../constants";

const BottomSheet = () => {
  console.warn("render");
  let [cardHeight, setCardHeight] = useState(0);
  const backDropVisible = new Animated.Value(1)

  const bottom = new Animated.Value(0);

  const pandResponder = PanResponder.create({
    onMoveShouldSetPanResponder: (_, gestureState) => true,
    onPanResponderMove: (_, { dy }) => bottom.setValue(dy),
    /* onPanResponderGrant: () => {
      bottom.setOffset(bottom._value); 
      bottom.setValue(0);
    }, */
    onPanResponderRelease: (_, {dy}) => {
     bottom.flattenOffset();
      const percentageToClose = 0.4 * cardHeight;

      if (dy > percentageToClose) {
        return animateOut();
      }
      animatedIn();
    },
  });

  function animatedIn() {
    Animated.spring(bottom, { toValue: 0, useNativeDriver: true }).start();
  }

  const animateOut = () => {
    Animated.spring(bottom, {
      toValue: cardHeight,
      useNativeDriver: true,
    }).start();
  };
  return (
    <>
      <TouchableWithoutFeedback onPress={animateOut} style={styles.backButton}>
        <Animated.View
          style={[
            styles.backdrop,
            {
              opacity: bottom.interpolate({
                inputRange: [0, cardHeight],
                outputRange: [1, 0],
                extrapolate: "clamp",
              }),
            },
          ]}
        ></Animated.View>
      </TouchableWithoutFeedback>
      <Animated.View
        {...pandResponder.panHandlers}
        onLayout={(event) => setCardHeight(event.nativeEvent.layout.height)}
        style={[
          styles.container,
          {
            transform: [
              {
                translateY: bottom.interpolate({
                  inputRange: [0, cardHeight],
                  outputRange: [0, cardHeight],
                  extrapolate: "clamp",
                }),
              },
            ],
          },
        ]}
      >
        <Text>{cardHeight}</Text>
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  but: {
    position: "absolute",
    right: 0,
    left: 0,
    bottom: 0,
    top: 0,
  },
  backdrop: {
    position: "absolute",
    right: 0,
    left: 0,
    bottom: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  container: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#fff",
    height: height / 1.5,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    zIndex: 100
  },
});

export default BottomSheet;
