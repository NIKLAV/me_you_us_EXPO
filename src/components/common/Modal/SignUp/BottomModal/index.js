import React, { forwardRef, useImperativeHandle, useState } from "react";
import {
  StyleSheet,
  Animated,
  TouchableWithoutFeedback,
  PanResponder,
} from "react-native";
import * as types from '../../../redux/types'
import { useDispatch, useSelector } from "react-redux";

import { height } from "../../../constants";
import { useIsFocused } from "@react-navigation/native";

const BottomModal = (props, ref) => {
  const isOpen = useSelector(state => state.modal.isOpen)
  const dispatch = useDispatch()

  console.warn("render");
  let [cardHeight, setCardHeight] = useState(0);
  const backDropVisible = new Animated.Value(1);

  const bottom = new Animated.Value(0);

  const pandResponder = PanResponder.create({
    onMoveShouldSetPanResponder: (_, gestureState) => true,
    onPanResponderMove: (_, { dy }) => bottom.setValue(dy),
    onPanResponderRelease: (_, { dy }) => {
      bottom.flattenOffset();
      const percentageToClose = 0.4 * cardHeight;

      if (dy > percentageToClose) {
        return close();
      }
      open();
    },
  });

  function animatedIn() {
    backDropVisible.setValue(1);
    Animated.timing(bottom, { toValue: 0, useNativeDriver: false }).start();
  }

  const animateOut = () => {
    Animated.timing(bottom, {
      toValue: cardHeight,
      useNativeDriver: false,
    }).start(() => {
      backDropVisible.setValue(0);
    });
  };

  function open  () {
    animatedIn();
    
  }

  function close() {
    /* dispatch(types.CLOSE_MODAL) */
    animateOut();
  }




  return (
    <>
    
      <TouchableWithoutFeedback onPress={close} style={styles.backButton}>
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
            {
              transform: [
                {
                  translateX: backDropVisible.interpolate({
                    inputRange: [0, 1],
                    outputRange: [1000, 0],
                  }),
                },
              ],
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
      ></Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  /* but: {
    position: "absolute",
    right: 0,
    left: 0,
    bottom: 0,
    top: 0,
  }, */
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
    /* zIndex: 100, */
  },
});

export default BottomModal;
